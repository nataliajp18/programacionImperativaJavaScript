let misMascotas = []

let gata = {
    nombre : "Pacha",
    raza : "criolla",
    edad : 5,
    sonido : function() {
        return "Miau ".repeat(2);
    }
};

//console.log(gata.sonido());

let perro = {
    nombre : "Duncan",
    raza : "criollo",
    edad : 12,
    sonido : function sonidoPerro() {
        return "Guau ".repeat(2);
    }
}

misMascotas.push(gata);
misMascotas.push(perro);

function aumentarEdad(array) {
    for (let i = 0; i < array.length; i++){
        array[i].edad += 1;
    } 
    return array;
}
//let edadTotal = aumentarEdad(misMascotas);
//console.log(edadTotal);

// Punto dos 

function aumentarEdadDos(array){
    let edadMascota;
    for (let i = 0; i < array.length; i++){
        edadMascota = array[i].edad;
        if(edadMascota < 6){
            array[i].edad += 1;
        } else if(edadMascota >= 6 && edadMascota <= 10){
            array[i].edad += 2;
        }else if(edadMascota > 10){
            array[i].edad += (array[i].edad / 2);
        }else{
            console.log("Edad invalida");
        }
    }
    return array;
}

//let edadFinalMascota = aumentarEdadDos(misMascotas);
//console.log(edadFinalMascota);

function identificar(array) {
    for (let i = 0; i < array.length; i++){
        array[i].placa = i + 1;
    }
    return array;
}

//let identificador = identificar(misMascotas);
//console.log(identificador);

function eliminarRaza(array) {
    for (let i = 0; i < array.length; i++){
        delete array[i].raza;
    }
    return array;
}

//let eliminarAtributoRaza = eliminarRaza(misMascotas);
//console.log(eliminarAtributoRaza);


