//Buscar dentro del arreglo de numeros si existe el numero 15

let numeros = [1, 2, 5, 7, 38, 15, 45, 6, 7,];

function recorrido(array) {
    let numeroEncontrado;
    for(let i = 0; i <= array.length; i++){
        if (array == 15){
            //console.log("Encontre el numero que buscabas");
        }
    }
}

//Arreglo invertido

let arreglo = [1,2,3,4,5];

function mostrarInvertido(array) {

    let arregloRetornar = []
    for(let i = 0; i <= array.length; i++) { //Lenght cuenta la cantidad de elemntos que tenga ese arreglo// 
        arregloRetornar.unshift(array[i]);
    }

    return arregloRetornar;
}

let arregloInvertido = mostrarInvertido(arreglo);
//console.log(arregloInvertido);

//Ejercicio peliculas 

let peliculas = ["Star wars", "totoro", "Rocky", "pulp fiction", "la vida es bella"];
//console.log(peliculas[6]);

let peliculasAnimadas = ["Toy story", "finding memo", "kung fu panda", "wally", "fortnite"];

//De minuscula a mayuscula
function conversorMayusculas(array) {
    for(let i = 0; i < array.length; i++){
        array[i] =  array[i].toUpperCase(); 
    }
    return array;
}

//let peliculasMayuscula = conversorMayusculas(peliculas);
//console.log(peliculasMayuscula);

//Union de  arrays
function unionArreglos(arrayUno, arrayDos) {
    let unionDeArreglos;
    unionDeArreglos = arrayUno.concat(arrayDos);
    return unionDeArreglos;
}
let arregloFinal = unionArreglos(peliculas, peliculasAnimadas);
conversorMayusculas(arregloFinal)
//console.log(arregloFinal);

//Eliminar elemento 

function elimarJuego(array) {
    let eliminarJuegoA = arregloFinal.pop();
    return eliminarJuegoA;
};

let eliminacionJuego = elimarJuego(arregloFinal);
console.log(eliminacionJuego);
console.log(arregloFinal);

//Arrays con calificaciones comp

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5]; 

function comparacion(arrayUno,arrayDos){
    let comparacion = [];
    for(let i = 0; i < arrayDos.length; i++ ){
        if (arrayUno[i] === arrayDos[i]) {
            comparacion += 1;
        }
        return comparacion;
    }
}

comparacion(asiaScores,euroScores);


