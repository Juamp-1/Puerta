
    /*
Vamos a ver cómo crear nuestra funcion constructora Perro y crear
dos instancias con los siguientes datos:
nombres: Pluto y Snoopy, edades 94, 74 y vacunado true y false
*/

function Perro(nombre,edad,vacunado) {
    this.nombre = nombre;
    this.edad = edad;
    this.vacunado = function (
        if (vacunado = true) {
            
        }
    ) {
        
    };
}

let plutoLiteral = {
    nombre : "Pluto",
    edad : 94,
    vacunado : true
}

let pluto = new Perro("Pluto", 94, true);
let snoopy = new Perro("Snoopy", 74, false);

console.log(pluto);
console.log(snoopy);