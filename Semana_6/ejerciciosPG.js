let num1 = 4;
let num2 = 78;
let num3 = 14;

function mayor(a,b,c) {
    let numeroMayor;
    if (a > b && a > c) {
        numeroMayor = a;
    }else if(b > a && b > c){
        numeroMayor = b;
    }else{
        numeroMayor = c;
    }
    return numeroMayor;
}

let numeroMayorFinal = mayor(num1, num2, num3);
//console.log(numeroMayorFinal);

// Mayor con cuatro numeros


let numUno = 13;
let numDos = 16;
let numTres = 3363;
let numCuatro = 69;

function mayorDos(a,b,c,d) {
    return mayor(mayor(a,b,c),d)
}

let numeroMayorDos = mayorDos(numUno, numDos, numTres, numCuatro);
console.log(numeroMayorDos);