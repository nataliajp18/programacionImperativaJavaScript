const prompt = require("prompt-sync")({ sigint: true });

//Mostrar 10 numeros siguientes 
function valorParametro(numero) {
    for (let i = numero + 1; i <= numero+10; i++){
        console.log(i);
    }
}
//console.log(valorParametro(3));

//Impresion numeros desde 5 y 20    
function numeros() {
    for(let i = 5; i <= 20; i+= 3){
        console.log(i);
    }
    return;
}
//console.log(numeros());

//Sumatoria numeros entre 0 y 100

function sumatoria() {
    let suma=0;
    for(let i = 0; i <= 100; i++){
        suma = suma + i;
    }
    return suma;
}
//console.log(sumatoria());

//Factorial numero 

function factorial(numero) {
    let multiplicar = 1;
    for(let i = 1; i <= numero; i++){
        multiplicar = multiplicar * i;
    }
    return multiplicar;
}
//console.log(factorial(5));

//Fibonacci

function fibo(num) {
    let resultado = 0;
    for(let i = 0; i <= num; i++){
        resultado = (i - 1 + i - 2) +  resultado;
    }
    return resultado;
}
//console.log(fibo(10));


function secuencia() {
    let suma = 0;
    for(let i = 0; i <= 100; i++){
        suma = suma + i;
    }
    return suma;
}
console.log(secuencia());