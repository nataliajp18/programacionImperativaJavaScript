let arrayUno = [1,5,4,6,3,2,7,9,8];
let arrayDos = [11,12,13,14,15,16];

function ordenArray(array) {

    let resultado = true;

    for(let i=0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]){
            resultado = false;
            }
        }
    return resultado;
}

let pruebaFinal = ordenArray(arrayDos);
//console.log(pruebaFinal);

//Funcion con nombres y resultado mensaje

let nombres = ["Alberto", "Juan", "Carlos", "Andres"]

function mensaje(array) {
    for(let i = 0; i < array.length; i++){
        console.log("Estimado " + array[i] + " vote por mi");
    }
    return;
}

mensaje(nombres);