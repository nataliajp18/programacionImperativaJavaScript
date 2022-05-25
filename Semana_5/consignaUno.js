// Loop pares 

function loopPares(num){
    for(let i =0; i<= 100; i++){
        if((i+num) % 2 == 0){
            console.log("El numero es par: " + i);
        }else{
            console.log("El numero es impar " + i);
        }
    }
}
//loopPares(100);

//Loop  impares
function loopPares(num){
    for(let i =0; i<= 100; i++){
        if((i+num) % 2 != 0){
            console.log("El numero es impar: " + i);
        }else{
            console.log("El numero es par " + i);
        }
    }
}
//loopPares(100);

//Sumatoria

function sumatoria (num){
    let suma = 0;
    for(let i = 0; i <= num; i++){
        suma = suma + i;
    }
    return suma;
}
console.log(sumatoria(8));

//Nuevo arreglo

function nuevoArreglo(num) {
    let nuevoArreglo = [];
    for(let i = 1; i <= num; i++){
        nuevoArreglo.push(i)
    }
    return nuevoArreglo;
}
console.log(nuevoArreglo(4));

// Similar string

function split(palabra) {
    let array = [];
    for(let i = 0; i < palabra.length; i++){
        array.push(i)
    }
    return array;
}
console.log(split("hola"));

// Letra del medio

function caracterMedio(palabra){
    if(palabra.length % 2 == 0){
        console.log("Tu palabra ");
    }
}