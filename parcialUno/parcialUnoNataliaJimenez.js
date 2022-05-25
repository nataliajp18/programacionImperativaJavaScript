// Ejercicio Uno 

let estudiante = {
    nombre : " Ingrid Natalia",
    apellido : "Jimenez Prieto",
    camada : 4, 
    esParcial: true
}

function notaFinal(nota){
    let notaEstudiante;
    if (nota < 4){
        notaEstudiante = "DESAPROBADO"
    } else if (nota >= 4 && nota < 7){
        notaEstudiante = "DEBE RENDIR EXAMEN"
    }else{
        notaEstudiante = "PROMOCIONADO"
    }
    return notaEstudiante;
}

let notaFinalEstudiante = notaFinal(8);
console.log("El alumno obtuvo una nota igual a " + 8 + " por lo tanto su condicion es: " + notaFinalEstudiante);

// Ejercicio dos 

let clase = []

let estudianteUno = {
    nombre : "Esteban",
    apellido : "Piazza",
    bimestre: 4
}

let estudianteDos = {
    nombre : "Leandro",
    apellido : "Borrelli",
    bimestre : 2
}

let estudiianteTres = {
    nombre : "Martin",
    apellido : "Cejas",
    bimestre : 6
}

clase.push(estudianteUno);
clase.push(estudianteDos);
clase.push(estudiianteTres);

//console.log(clase);

//Incrementar en uno el numero del bimestre

function siguienteCursada(array) {
    for(let i = 0; i < array.length; i++){
        array[i].bimestre += 1; 
    }
    return array;
}

//console.log(clase);
let laSiguienteCursada = siguienteCursada(clase);
//console.log(laSiguienteCursada);

// Ejercicio tres 

const numeroAsistencias = [23];

function evaluacionAsistenciaAlumno(numAsistencias, avancePg) {
    if (numAsistencias >= numeroAsistencias && avancePg == true) {
        return "El estudiante aprobo la cursada"
    }else{
        return "El estudiante desaprobo la cursada"
    }
}

let estadoAlumno = evaluacionAsistenciaAlumno(3, true);
//console.log(estadoAlumno);





