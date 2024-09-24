/*
Resulta que cuando hay que presentar ganancias mayores a $ 1.000 no se 
presentan junto con las rendiciones que veníamos haciendo, por lo cual vamos a 
necesitar darle una vuelta de tuerca mas a nuestra función de Sumatorias.

Escribí la función sumatoriaBajoImporte() la cual recibiendo un array con 
importes nos devuelva el resultado final de la suma de los importes de todos 
los meses que tienen ganancia, a excepción de los que superen un importe de 
$ 1.000
*/

let importes = [400, 1200, 250, 3600, 50, 1250]

function sumatoriaBajoImporte(array = []) {
    let sumatoria = 0;

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] < 1000) {
            sumatoria = array[i] + sumatoria
        }
    }

    return sumatoria
}

let resultado = sumatoriaBajoImporte(importes);

console.log(resultado);