/*
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

//Arrow Pulgadas a centimetros

let convertir=a=>a*2.54;

console.log(convertir(7));

// De string a URL

function link(y){
    return "http://wwww."+y+".com";
}
console.log(link("holamundo"));

//Arrow De string a URL

let links=b=> "http://wwww."+ b+".com";

console.log(links("holamundo"));

//String con signo de admiracion al final 

function cadena(z){
    return z+"!!!";
}
console.log(cadena("Hola Bienvenidos"));

//Arrow String con signo de admiracion al final 

let cadenas=c=> c+"!!!";

console.log(cadenas("Hola Bienvenidos"));

// Calculando la edad de los perros 

function edad(edadCanina){
    return edadCanina*7;
}

console.log(edad(8));

//Arrow Calculo edad canina

let edades=d=> d*7;

console.log(edades(8));

// Calculando el valor de una hora de trabajo

function valorHora(s){
    return s/40;
}
console.log(valorHora(500000));

//Arrow Calculo hora de trabajo

let horaTrabajo=c=> c/40;

console.log(horaTrabajo(500000));

// Calculando el IMC

function calculadorIMC(h,k){
    return k/(h*h);
}

console.log(calculadorIMC(1.50,68));

//Arrow Calculo IMC

let calculoIMC=(e,f)=>f/(e*e);

console.log(calculoIMC(1.50,68));

*/

// Cadena de string a mayusculas

let cadenaMayusculas=(texto)=>texto.toUpperCase();
console.log(cadenaMayusculas("hola mundo"));

//Tipo de dato

function tipoDato(f){
    return typeof(f);
}

console.log(tipoDato("Hola mundo"));

//Radio de un circulo y devuelve la circunferencia

function calcularCircunferencia(radio){
    return 2*Math.PI * radio;
}

console.log(calcularCircunferencia(1));