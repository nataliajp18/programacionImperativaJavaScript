const prompt = require("prompt-sync")({ sigint: true });

//Mensaje por consola

function saludo() {
    //let mensaje = prompt("Introduzca una frase: ");
    return mensaje;
}
//console.log("La frase ingresada es: " + saludo());

//Nombre usuario

function nombreUsuario() {
    //let nombre = prompt("Introduza su nombre: ");
    return nombre;
}
//console.log("Hola, " + nombreUsuario() + "!" );

//Suma de numeros

function sumatoria() {
    //let num1 = Number(prompt("Ingrese el primer numero: "));
    //let num2 = Number(prompt("Ingrese el segundo numero: "));
    sumar = num1 + num2;
    return sumar;
}
//console.log("La suma de los numeros ingresados es: " + sumatoria());

//Edad actual
function edadActual() {
    //let fecha = Number(prompt("Ingrese su fecha de nacimiento: "));
    edad = 2022 - fecha;
    return edad;
}
//console.log("Tu edad actual es: " + edadActual() + " años");

//Numeros pares del 0 al 100

function pares() {
    for (let i = 0; i <= 100; i += 2){
        console.log(i);
    }
    return NaN;
}
pares();

