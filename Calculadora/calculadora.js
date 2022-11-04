const calculadora = require('./operaciones');

const process = require('process');
const operacion = process.argv[2];
const numeroA = +process.argv[3];
const numeroB = +process.argv[4];
let resultado = 0;

if (operacion === 'sumar') {
    resultado = calculadora.sumar (numeroA, numeroB)
} else if (operacion === 'restar') {
    resultado = calculadora.restar (numeroA, numeroB)
} else if (operacion === 'multiplicar') {
    resultado = calculadora.multiplicar (numeroA, numeroB)
} else if (operacion === 'dividir') {
    resultado = calculadora.dividir (numeroA, numeroB)
} else {
    resultado = 'ERROR: Operación no válida';
}

console.log(resultado);