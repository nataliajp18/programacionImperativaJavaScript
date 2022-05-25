function elDoble (unNumero){
    return unNumero*2;
}

elDoble(6);

// Funcion expresada: Se guarda dentro de una variable

let sumar=function(numeroA, numeroB){
    return numeroA+numeroB;
}

console.log(sumar(7,9));

// Funcion declarada

function restar(numeroC, numeroD){
    return(numeroC-numeroD);
}

console.log(restar(10,3));

//Scope

let mensaje="Hola";

function saludar(){
    let mensaje="Chao"
    return mensaje;
}
console.log(mensaje);
console.log(saludar());

// Arrow functions: Solo se puede hacer cuando hay una operación

let laMitad=numero=>numero/2;

console.log(laMitad(8));

let dividir=(numeroF, numeroE)=>numeroF/numeroE;
console.log(dividir(20,4));

// Ejercicio clase

console.log(Math.random()); //Arroja un numero aleatorio

// Forma uno
function saludar(nombre){
    console.log("Hola tanto tiempo"+nombre);
}

saludar("Elizabeth");

// Forma dos
function saludarDos (nombres){
    let saludos="Hola tanto tiempo"+nombres;
    return saludos;
}

let saludoMostrar=saludarDos("Natalia");
console.log(saludoMostrar);

//Consigna

function test(x,y){
    return x*2
    console.log(x);
    return x/2
}

test(10);

//De pulgadas a centimetros

function conversor(x){
    return x*2.54;
}

console.log(conversor(7));
