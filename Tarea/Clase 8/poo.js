/*
Vamos a ver cómo crear nuestra funcion constructora Perro y crear
dos instancias con los siguientes datos:
nombres: Pluto y Snoopy, edades 94, 74 y vacunado true y false
*/

function Auto(marca= "", modelo = "") {
    this.marca = marca;
    this.modelo = modelo;
}
let auto1 = new Auto();
let auto2 = new Auto("Ford", "F-150");
let miAuto = new Auto ("Lamborghini", "Veneno");

console.log(miAuto.marca, miAuto.modelo);

function Perro(Nombre, Edad, Vacunado) {
this.Nombre = Nombre;
this.Edad= Edad ;
this.Vacunado = Vacunado ;
}
let pluto = new Perro ("Pluto", 94, true);
//let snoopy = new Perro ("snoopy", 74, false);
console.log("su nombre es "+pluto.Nombre,"tiene " +pluto.Edad, "y esta vacunado "+ pluto.Vacunado);



