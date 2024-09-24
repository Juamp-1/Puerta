/*
Instrucciones
1. En la carpeta ya creada crear un nuevo archivo JavaScript (.js).
2. En el archivo creado debes desarrollar un código para lograr efectuar operaciones
aritméticas. Para ello, declarar dos variables, otorgando el nombre y los valores
numéricos que consideres. Ejemplo: let numero1 = 16;
3. Usando el console.log() mostrar al usuario los resultados de las siguientes operaciones
aritméticas, en función de los valores asignados a las variables:
a. suma
b. resta
c. multiplicación
d. división
e. módulo
4. ¿Cual de los valores es mayor? Si el valor es mayor, mostrará un valor boolean true. De
lo contrario mostrará false
5. ¿Cual de los valores es menor? Si el valor es menor mostrará un valor boolean true. De
lo contrario mostrará false
*/


// Declarar variables
let numero1 = 16;
let numero2 = 8;


// Realizar operaciones aritméticas
console.log("La suma de los dos números es: ", numero1 + numero2);
console.log("La resta de los dos números es: ", numero1 - numero2);
console.log("La multiplicación de los dos números es: ", numero1 * numero2);
console.log("La división de los dos números es: ", numero1 / numero2);
console.log("El módulo de los dos números es: ", numero1 % numero2);


// Comparar valores
if (numero1 > numero2) {
  console.log("El valor de numero1 es mayor: ", true);
} 
    else {
  console.log("El valor de numero1 es mayor: ", false);
}
if (numero1 < numero2) {
  console.log("El valor de numero1 es menor: ", true);
} 
    else {
  console.log("El valor de numero1 es menor: ", false);
}
