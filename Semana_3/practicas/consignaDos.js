//Parte una
function valorParametro(numero) {
    for (let i = numero + 1; i <= numero+10; i++){
        console.log(i);
    }
}

valorParametro(10)

//Parte dos
function imprimir() {
    for (let i = 5; i <=20 ;i += 3) {
        console.log(i)
}
}

imprimir()

//Parte tres
function sumatoria() {
    let suma =0;
    for (let i = 0; i <= 100; i++){
        suma = suma + i;
    }
    console.log(suma);
}

sumatoria()

// Parte cuatro

function factorial(num){
    let multiplicar = 1;
    for(let i = 1; i <= num; i++){
        multiplicar = multiplicar * i;
    }
    console.log(multiplicar);
}

factorial(4)

//Parte cuatro 

function fibonachi(num) {
    let resultado = 0;
    for(let i = 0; i <= num; i++){
        resultado = i *((i - 1) + i) 
        console.log(resultado);
    }
}

fibonachi(4)