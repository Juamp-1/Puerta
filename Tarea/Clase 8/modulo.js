const process = require("process")
//console.log(process.argv);

const calculadora = require('./calculadora')

let operacion = process.argv[2]

let numeroa =+ process.argv[3];
let numerob =+ process.argv[4];

function calcular(a, b, operacion) {

    if(!operacion){
        return "Necesito que me indiques la operación matemática!"
    }
    switch (operacion){
        case "sumar":
            return calculadora.sumar(a,b);
        case "restar":
            return calculadora.restar(a,b);
        case "multiplicar":
            return calculadora.multiplicar(a,b);
        case "dividir":
            return calculadora.dividir(a,b);
        case "potenciar":
            return calculadora.potenciar(a,b);
        case "radicar":
            return calculadora.radicar(a,b);
        default:
            return "Operación no válida"
    }
}

let resultado = calcular(numeroa, numerob ,operacion)

console.log(resultado);

