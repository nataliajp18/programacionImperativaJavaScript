// Nombre: Ingrid Natalia Jimenez Prieto
// Camada : Cuatro

const alumnos = [
  {
    id: 0,
    nombre: "Leandro",
    apellido: "Borrelli",
    legajo: 20210308,
    notas: [],
  },
  {
    id: 1,
    nombre: "Esteban",
    apellido: "Piazza",
    legajo: 20210211,
    notas: [],
  },
  {
    id: 2,
    nombre: "Martin",
    apellido: "Cejas",
    legajo: 20210218,
    notas: [],
  },
  {
    id: 3,
    nombre: "Karina",
    apellido: "Borgna",
    legajo: 20210516,
    notas: [],
  },
  {
    id: 5,
    nombre: "Javier",
    apellido: "Riera",
    legajo: 20220125,
    notas: [],
  },
];

// Ejercicio 1 
// Punto 1

// a.  ¿Qué tipo de dato es? : El tipo de  dato es un objeto
// b. ¿Cuáles son las claves que puedes identificar? : Las claves son id, nombre, apellido, legajo, nota.

//Punto 2 
//Crear una función que ordene la estructura definida en el archivo final.js según la propiedad legajo de forma descendente. (*)

function ordenLegajo(array) {
  for(let i = 0; i < array.length; i++){
    for(let j = 0; j < array.length - 1; j++){
        if(array[j].legajo < array[j + 1].legajo){
            let temporal = array[j];
            array[j] = array[j + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            array[j + 1] = temporal;
        }
    }
}
return array;
}

console.log(alumnos);
let ordenFinal = ordenLegajo(alumnos)
console.log(ordenFinal);

//Ejercicio 2  
//Punto 3 
//Crear un método que retorne el promedio de notas. (*)

let alumno = {
  id: 5,
  nombre: "Lucas",
  apellido: "Astrada",
  legajo: 20220125,
  notas: [10,6,8,7,9],
  promedio : function () {
    let suma = 0;
    for(let i = 0; i < this.notas.length; i++){
      suma += this.notas[i];
    }
    return suma / this.notas.length;
  }
  }

console.log(alumno);
console.log("El promedio del alumno es: " + alumno.promedio());

//Punto 4
//Crear una función que ordene las notas del alumno de forma ascendente. (*)

function ordenNotasAsc(arreglo) {
  for(let z = 0; z < arreglo.notas.length; z++){
    for(let i = 0; i < arreglo.notas.length - 1; i++){
        if(arreglo.notas[i] > arreglo.notas[i + 1]){
            let temp = arreglo.notas[i];
            arreglo.notas[i] = arreglo.notas[i + 1];
            arreglo.notas[i + 1] = temp;
        }
    }
}
return arreglo;
}

console.log(alumno);
let ordenNotasFinal = ordenNotasAsc(alumno);
console.log(ordenNotasFinal);

//Ejercicio 3
//a. Crea una matriz de 3x3, cuadrada, con números enteros negativos en cada una de sus posiciones.

let matriz = [[-3,-6,-9], [-4,8,-12], [5,9,10]];

//b. Crear una función que retorne la suma de todos los números dentro de la matriz que sean múltiplos de 5. 

function multiplosCinco(matz) {
  let sumaMultiplosCinco = 0;
  for(let z = 0; z < matz.length; z++){
    for(let i = 0; i < matz.length; i++){
      if(matz[z][i] % 5 == 0){
        sumaMultiplosCinco += matz[z][i]; 
        }
    }
  }
  return sumaMultiplosCinco;
}

console.log(matriz);
let sumaMultiplosCincoFinal = multiplosCinco(matriz);
console.log(sumaMultiplosCincoFinal);

//C. Crear una función que retorne un valor booleano dependiendo si la suma de todos los valores de la matriz es impar.

function sumaMatriz(matrz) {
  let sumaTotal = 0;
  for(let z = 0; z < matrz.length; z++){
    for(let i = 0; i < matrz.length; i++){
      sumaTotal += matrz[z][i];
      if(sumaTotal % 2 != 0){
        return true;
        }
    }
  }
  return false;
}

console.log(matriz);
let isTotalImpar = sumaMatriz(matriz);
console.log(isTotalImpar);

//D. Crear una función que retorne la multiplicación de las diagonales de la matriz.

function multiplicacionDiagonales(matz) {
  let multiplicacion = 1;
  for(let z = 0; z < matz.length; z++){
    for(let i = 0; i < matz.length; i++){
      if(z == i){
        multiplicacion *= matz[z][i];
        }
      if(z + i == matz.length - 1){
        multiplicacion *= matz[z][i];
      }
    }
  }
  return multiplicacion;
}

console.table(matriz)
let multiplicacionDiagonalesMatriz = multiplicacionDiagonales(matriz)
console.log("La multiplicacion de las diagonales de la matriz es: " + multiplicacionDiagonalesMatriz);
