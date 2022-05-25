//Array

let nombres = ["Natalia","Wiiliam","Alejandra"];
let edades = [24,27,22];
let valoresReales = [true, false, true];
let variado = ["Natalia", 24, true, edades];


//Como consultar el dato

//console.log(valoresReales[0]);

//Array dentro de array

//console.log(variado[3][1]);

//Metodos

let notas = [3, 5, 6, 4, 7, 4, 9, 8]

//Push: Agregar

notas.push(1);
notas.push(4);

//Pop: Eliminar

let elUltimo = notas.pop()

//Shift: Elimina elemnentos al inicio 

notas.shift();
notas.shift();

//Unshift: Agrega al inicio del arreglo

notas.unshift(4);

//console.log(notas);

let notasDos = [3, 6, 7, 8, 6, 5, 6, 8, 8];

//Indexof: Donde esta el elemento al inicio

let posicionOcho = notasDos.indexOf(8);

//Lastindexof: Donde esta el elemento desde el final 

let posicionOchoDos = notasDos.lastIndexOf(8);

//Join

let resultadoJunto = notasDos.join(', ');


console.log(resultadoJunto);

