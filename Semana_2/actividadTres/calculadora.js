const prompt = require("prompt-sync")({ sigint: true });

let numeroUno = Number(prompt("Ingresar el primer numero: "));
let numeroDos = Number(prompt("Ingresar el segundo numero: "));

let sumar = (numero1,numero2) => (numero1+numero2);


let restar = (numero1,numero2) => (numero1-numero2);


let multiplicar = (numero1,numero2) => (numero1*numero2);


let dividir = (numero1,numero2) => (numero1/numero2);


console.log("-------------- Testeo de Operaciones / Calculadora --------------");
console.log("El resultado de la suma es: " + sumar(numeroUno, numeroDos));
console.log("El resultado de la resta es: " + restar(numeroUno,numeroDos));
console.log("El resultado de la multiplicacion es: " + multiplicar(numeroUno,numeroDos));
console.log("El resultao de la division es: " + dividir(numeroUno,numeroDos));

function cuadradoDeUnNumero(numero_uno){
    let cuadrado_numero=multiplicar(numero_uno,numero_uno);
    return cuadrado_numero;
}
console.log(cuadradoDeUnNumero(4));

function promedioDeTresNumeros(numero_uno, numero_dos, numero_tres){
    let suma_uno = sumar(numero_uno, numero_dos);
    let suma_dos = sumar(suma_uno, numero_tres);
    let promedio = dividir(suma_dos,3);
    return promedio;
}

console.log(promedioDeTresNumeros(4,2,2));

function calcularPorcentaje(total, porcentaje_calcular){
    let res_mult = multiplicar(porcentaje_calcular,total);
    let res_div = dividir(res_mult,100);
    return res_div;
}

console.log(calcularPorcentaje(150,30));