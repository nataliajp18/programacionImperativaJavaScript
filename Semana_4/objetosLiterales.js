let objeto = {
    cantidadAlumnos : 32,
    docentes : ["Nacho", "Javier"],
    horario : "de 19 a 21 horas",
    notificaciones : function(){
        return "El horario de la cursada es: " + this.horario;
    }
}

//console.log(objeto);

//console.log("La cantidad de alumnos de este curso es de: " + objeto.cantidadAlumnos);

//console.log(objeto.notificaciones());

//Clase

function arregloObjetos(num) {

    let resultados = [];
    for ( let i = 1; i <= num; i++){

        let objeto = {
            valor : i
        }

        resultados.push(objeto);
    }
    return resultados;
}

let arrayTerminado = arregloObjetos(3);

console.log(arrayTerminado);