const matrizEdades = [[20,56,6,7,8,4,34,5,45], 
[20,56,6,7,8,4,34,5,45], 
[20,56,6,7,8,4,45]];

//console.log(matrizEdades[2][2]);

//Recorrer una fila de la matriz

const matrizPg = [[1,3,5,7],[0,2,4,6],[8,9,10,11]];

for(let i = 0; i<matrizPg[1].length;i++){ //Se determina que fila se quiere recorrer
    //console.log(matrizPg[1][i]);
}

//Recorrer una columna 

for(let i = 0;i < matrizPg.length;i++){
    //console.log(matrizPg[i][2]);
}

//Recorrer por filas 

for(let fila = 0; fila < matrizPg.length; fila++){
    for(let columna = 0; columna < matrizPg[fila].length;columna++){
        //console.log(matrizPg[fila][columna]);
    }
}

//Ejercicios

let matrizUno = [[2,4],[5,7]];
//Acceder al valor en 1-1
//console.log(matrizUno[1][1]);

matrizUno[1][0] = 78;
//console.table(matrizUno);

//Crear matrices

let matrizDos = [];

let arraX = ["x0", "x1", "x2"];
let arraY = ["y0", "y1", "y2"];

matrizDos[0] = arraX;
matrizDos[1] = arraY;
//Muestra toda la matriz
for(let i = 0; i < matrizDos.length; i++){
    //console.log(matrizDos[i]);
}

//Muestra valores donde fila y columnan coincidan (Diagonal principal)
for(let i = 0; i < matrizDos.length; i++){
    //console.log(matrizDos[i][i]);
}

//Muestra valores asi la matriz no sea cuadrada

for(let i = 0; i < matrizDos[0].length; i++){ //Se agrega los corchetes para que devuelva lo que se tiene cargado en esa fila
    //console.log(matrizDos[0][i]);
}

//Recorrer la matriz posicion por posicion 

for(let i=0; i<matrizDos.length; i++) {
    for(let j=0; j<matrizDos[i].length; j++) {
        //console.log(matrizDos[i][j]);
    }
}

let matrizTres = [[1,1,1,1,1],[2,2,2,2,2],[3,3,3,3,3],[4,4,4,4,4],[5,5,5,5,5]];

let suma = 0

function sumatoria() {
for(let i=0; i<matrizTres.length; i++) {

    for(let j=0; j<matrizTres[i].length; j++) {
        suma = suma + matrizTres[i][j]
    }
}
return suma
}

//console.log(sumatoria());

