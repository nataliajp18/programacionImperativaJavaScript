// Para usar prompt: npm i prompt-sync
const prompt = require("prompt-sync")({ sigint: true });

// De centimetros a pulgadas 

function conversorPulgadas(pulgadas) {
    let resultado = pulgadas * 2.54
    return resultado;
}
//console.log(conversorPulgadas(3));

// Convertir un string a una URL 
function conversorUrl(palabra) {
    let resultado = "http://www." + palabra + ".com";
    return resultado
}
//console.log(conversorUrl("HolaMundo"));

//String mas signo de admiracion

function stringAdmiracion(frase) {
    let resultado = frase + "!";
    return resultado
}
//console.log(stringAdmiracion("Hola, estoy muy bien"));

//Calculando la edad de los perros

function edadPerrito(edad) {
    let resultado = edad * 7;
    return resultado;
}
//console.log("La edad del perrito es: " + edadPerrito(5));

// Valor hora de trabajo 

function horaTrabajo(sueldoMensual) {
    let resultado = sueldoMensual / 40;
    return resultado;
}
//console.log("El valor estimado por hora e trabajo es: $" + horaTrabajo(500000));

//Calculador de IMC

function calculadorIMC(altura, peso){
    let resultado = peso / (altura*altura);
    return resultado;
}
//console.log(calculadorIMC(1.65,100));


//Ejemplo com prompt

//let nombre = prompt("Ingrese su nombre: ");
//console.log("Hola " + nombre + "!!!");

//Funcion con prompt

function conversorPulgadas() {
    //let pulgadas = parseInt(prompt("Introduzca el valor en pulgadas: "));
    let resultado = pulgadas * 2.54;
    return resultado;
}
//console.log(conversorPulgadas() );

function calculadorIMC(){
    
    //let altura = Number(prompt("Introduzca el valor de la altura: "));
    //let peso = parseInt(prompt("Introduzca el valor del peso: "));
    let resultado = peso / (altura*altura);
    return resultado;
}
//console.log(calculadorIMC());

//Funcion arrow 

let resultado = (altura, peso) => peso / (altura * altura);

//console.log(resultado (1.65,100));

//De minuscula a mayuscula

function conversorMayuecula(palabra) {
    let resultado = palabra.toUpperCase()
    return resultado;
}
//console.log(conversorMayuecula("hola mundo"));

//Tipo de dato que se ingresa

function tipoDato(dato) {
    let resultado = typeof(dato);
    return resultado;
}
console.log(tipoDato(true));

//Circunferencia de un circulo

function radioCirculo(radio) {
    let resultado = 2 * Math.PI * radio
    return resultado;
}
console.log(radioCirculo(1));
