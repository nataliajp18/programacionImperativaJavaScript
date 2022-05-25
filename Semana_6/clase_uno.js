function mayor(a,b) {
    let mayor = 0;
    if (a > b){
        mayor = a;
    }else{
        mayor = b;
    }
    return mayor;
}

let num = mayor(15,78);
console.log(num);

//Funcion dentro  otra funcion

function mayorDos(a,b,c) {
    return mayor(mayor(a,b),c)
}

let numUno = mayorDos(2,5,7);
console.log(numUno);

//Dos funciones dentro de otra

function mayorTres(a,b,c,d) {
    return mayor(mayor(a,b), mayor(c,d));
}

let numDos = mayorTres(3,6,4,9);
console.log(mayorTres);

//Mayor en un arreglo con math
let numeros = [2,6,7,67,5,6,89,0]
function mayorArray(array) {
    let mayor = array[0];
    for(let i = 0; i < array.length; i++){
        mayor = Math.max(mayor, array[i]);
    }
    return mayor;
}

//Pares e impares

function esPar(num) {
    let resultado;
    if(num % 2 === 0){
        resultado = true;
    }else{
        resultado = false;
    }

    return resultado;
}

//Numeros primos

function primos(num) {
    let respuesta = "Es primo";
    let contador = 0;
    for(let i = 0; i <= num; i++){
        if(num % i === 0){
            contador = contador + 1;
        }
    }
    if(contador > 2|| num == 1 || num == 0){
        respuesta = "No es primo"
    }
    return respuesta;
}

let mensaje = primos(0);
console.log(mensaje);