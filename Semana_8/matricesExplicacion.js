let matriz = [[1,2,3],[4,5,6],[8,8,9]];

//console.log(matriz[0]); //Acceder a elementos de la matriz

function sumaDiagonalPrincipal(arr) {

    let diagonalPrincipal = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr       .length; j++){
            if(i == j){
                diagonalPrincipal += arr[i][j]
            }
        }
    }
    return diagonalPrincipal;
}

let sumaTotal = sumaDiagonalPrincipal(matriz);
//console.log(sumaTotal);

function sumaDiagonalSecundaria(arr) {

    let diagonalSecundaria = 0;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr       .length; j++){
            if(i + j == arr.length - 1){
                diagonalSecundaria += arr[i][j]
            }
        }
    }
    return diagonalSecundaria;
}

let sumaSecundaria = sumaDiagonalSecundaria(matriz);
console.log(sumaSecundaria);