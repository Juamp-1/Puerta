/*
Desafío extra:
Instrucciones
Si llegaste hasta acá, significa que vienes trabajando muy bien. ¡Felicitaciones!
Para que no te quedes con las ganas y puedas seguir practicando, te proponemos que
desarrolles las siguientes funciones. Verás que presentan una dificultad extra, por lo que
tendrás que buscar algunos conceptos para poder resolverlos. Es recomendable que crees
este hábito ya que es algo muy común que los programadores realizamos todos los días.
En la carpeta ya creada, crea un nuevo archivo JavaScript (.js) por cada nueva función.
1. Crear una función que recibe un string en minúscula, lo convierte a
mayúsculas y lo retorna. Investiga qué hace el método de strings
.toUpperCase()
2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es
ese parámetro. Investiga qué hace la palabra reservada typeof.
3. Crear una función que calcule la edad de los perros, considerando que 1 año para
nosotros son 7 de ellos.
4. Crear una función que calcule el valor de una hora de trabajo, teniendo en cuenta
que dicha función recibe tres parámetros: El salario mensual, la cantidad de días
trabajados y la cantidad de horas que regularmente trabajada por día.
*/
// 1. Crear una función que recibe un string en minúscula, lo convierte a mayúsculas y lo retorna.
function stringToMayusculas(str) {
  return str.toUpperCase();
}
// 2. Crear una función que recibe un parámetro y devuelve qué tipo de dato es ese parámetro.
function tipoDeDato(dato) {
  return typeof dato;
}
// 3. Crear una función que calcule la edad de los perros, considerando que 1 año para nosotros son 7 de ellos.
function edadPerro(edadHumana) {
  return edadHumana * 7;
}
/* 
4. Crear una función que calcule el valor de una hora de trabajo,
teniendo en cuenta que dicha función recibe tres parámetros: El
salario mensual, la cantidad de días trabajados y la cantidad de
horas que regularmente trabajada por día.
*/
function valorHora(salarioMensual, diasTrabajados, horasTrabajadas) {
  return (salarioMensual / diasTrabajados / horasTrabajadas) * 1;
}
// Llamar a las funciones
console.log(stringToMayusculas("hola")); // HOLA
console.log(tipoDeDato(123)); // number
console.log(edadPerro(5)); // 35
