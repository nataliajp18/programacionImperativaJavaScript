const prompt = require("prompt-sync")({ sigint: true });

//Suma
function suma(num1, num2) {
    let resultado = num1 + num2;
    return resultado
}
//console.log("El resultado de la suma es: " + suma(3,6));

//Resta
function resta(num1, num2) {
    let resultado = num1 - num2;
    return resultado;
}
//console.log("El resultado de la resta es: " + resta(6,3));

//Multiplicación 
function multiplicar(num1, num2) {
    let resultado = num1 * num2;
    return resultado;
}
//console.log("El resultado de la multiplicacion es: " + multiplicar(4,6));

//División 
function dividir(num1, num2) {
    let resultado = num1 / num2;
    return resultado;
}
//console.log("El resultado de la division es: " + dividir(10,5));

//Unificacion

//console.log("-------------- Testeo de Operaciones / Calculadora --------------")
/*
let num1 = Number(prompt("Introduzca el primer numero: "));
let num2 = Number(prompt("Introduzca el segundo numero: "));


console.log("El resultado de la suma es: " + suma(num1,num2));
console.log("El resultado de la resta es: " + resta(num1,num2));
console.log("El resultado de la multiplicacion es: " + multiplicar(num1,num2));
console.log("El resultado de la division es: " + dividir(num1,num2));
*/

//Cuadrado de un numero 

function cuadrado(num1) {
    let resultado = multiplicar(num1,num1)
    return resultado;
}
//console.log(cuadrado(9));

//Promedio de tres numeros

function promedio(num1, num2, num3) {
    let resultadoSuma = suma(num1,num2)
    let resultadoSumaDos= suma (resultadoSuma,num3)
    let resultado = dividir (resultadoSumaDos,3)
    return resultado;
}
//console.log(promedio(4,2,2));

//Calcular porcentaje 
function porcentaje(num1, porciento) {
    let operacion = multiplicar(num1,porciento);
    let resultado = dividir(operacion,100);
    return resultado;
}
//console.log("El porcentaje del numero solicitado es: " + porcentaje(80,20));

//Generando el porcentaje

function generadorPorcentaje(num, porcentaje) {
    let operacion = dividir (num, porcentaje);
    let resultado = multiplicar (operacion,100);
    return resultado;
}
console.log(generadorPorcentaje(2,200));