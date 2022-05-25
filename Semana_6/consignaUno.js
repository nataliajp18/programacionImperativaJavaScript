let arreglo = [3,6,7,8,5,4,3,4,5,6,7,0];
let num = 4;

function valorIndice(array, indice) {
    let valor;
    for(let i = 0; i < array.length; i++){
        if(indice === i){
            valor =  array[i];
        }
    }
    return valor;
}

let muestraNumero = valorIndice(arreglo, num);
//console.log(muestraNumero);


// Punto dos

function multiplos(){
    let multiplosTres;
    for(let i = 0; i <= 100; i++){
        if(i % 3 === 0){
            console.log("Buzz");
        }
        console.log(i);
    }
    return;
}

console.log(multiplos());