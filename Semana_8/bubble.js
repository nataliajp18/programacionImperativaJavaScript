let arreglo = [15,74,36,8]

for(let z = 0; z < arreglo.length; z++){
    for(let i = 0; i < arreglo.length - 1; i++){
        if(arreglo[i] > arreglo[i + 1]){
            let temp = arreglo[i];
            arreglo[i] = arreglo[i + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            arreglo[i + 1] = temp;
        }
    }
}

console.log(arreglo);

//Para un objeto

for(let z = 0; z < arreglo.length; z++){
    for(let i = 0; i < arreglo.length - 1; i++){
        //if(arreglo[i]."NombreAtributo" > arreglo[i + 1]."NombreAtributo"){
            let temp = arreglo[i];
            arreglo[i] = arreglo[i + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            arreglo[i + 1] = temp;
        }
    }
//}
