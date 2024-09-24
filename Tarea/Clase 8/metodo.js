/*
Crea un objeto llamado "estudiante" con la siguiente estructura de propiedades 
y valores:

- nombre: "Marta"
- apellido: "Silva"
- edad: 22
- carrera: "Ingeniería en Computación"
- promedio: 9.1

Luego, añádele un método dentro del objeto "estudiante" llamado "presentacion" 
que, al ser llamado, imprima en consola: "Hola, mi nombre es `Marta` `Silva` y 
estudio `Ingeniería de Computación`.
*/


let estudiante = {  
    nombre: "Marta",
    apellido: "Silva",
    edad: 22,
    carrera: "Ingeniería en Computación",
    promedio: 9.1,
    presentacion() {
            return`Hola, mi nombre es ${this.nombre} ${this.apellido} y estudio ${this.carrera}.`;    
    }


}  ;

console.log (estudiante.presentacion());


/*
Usando el objeto `estudiante`, accede a la propiedad `calle` que se espera esté 
dentro de la propiedad `direccion`, pero de tal manera que no se lance ningún 
error si la propiedad no existe. Para esto, utiliza el operador de 
encadenamiento opcional (`?.`).
El acceso a la propiedad calle debería ser la siguiente:
`estudiante.direccion.calle`


let estudiante = {
    nombre : "María",
    //direccion : "Siempre Viva 1234 Springfield",
    direccion : {
        calle : "Siempre Viva",
        altura : 1234,
        ciudad : "Springfield"
    }
};

console.log(estudiante);
console.log(estudiante.direccion.calle);

let otroEstudiante = {
    nombre : "Marta",
}

//console.log(otroEstudiante.direccion.altura); // ROMPEEEE!!!!

console.log(otroEstudiante.direccion?.altura); // si existe direccion, pasame la altura
*/