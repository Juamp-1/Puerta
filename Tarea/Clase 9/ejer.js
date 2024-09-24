/*
Necesitamos enviarle un diploma a los alumnos que están aprobados y un e-mail 
a los alumnos desaprobados para acordar un recuperatorio. Por lo tanto, 
necesitamos dos listas: una lista que almacene todos los aprobados y otra los 
desaprobados. Deberemos guardarlos en las variables aprobados y desaprobados 
respectivamente.
*/

const estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

const aprobados = estudiantes.filter((estudiantes) => {
    if (estudiantes.aprobado === true) {
        return estudiantes;        
    }

})

const aprobado2 = estudiantes.filter(estudiantes => estudiantes.aprobado);

const desaprobado =estudiantes.filter(estudiantes => !estudiantes.aprobado);

console.log("los estudiantes aprobados son =", aprobado2);
console.log("los estudiantes desaprobados son =", desaprobado);