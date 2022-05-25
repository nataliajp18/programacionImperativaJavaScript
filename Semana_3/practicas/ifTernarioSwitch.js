//If ternario

let fruta = 'Manzana';

let resultadoFruta = fruta == 'Manzana' ? 'Buenisimo me gustan las manzanas' : 'Ufa, queria manzana';

console.log(resultadoFruta);

let frutaDos = 'Naranja';

let resultadoFrutas = frutaDos == 'Manzana' ? 'Buenisimo me gustan las manzanas' : 'Ufa, queria manzana';

console.log(resultadoFrutas);

//Switch

let semaforo = 'amarillo';

switch (semaforo) {
    case 'verde':
        console.log("Puedo cruzar");
        break;
    case 'amarillo':
        console.log("Ten cuidado");
        break;
    case 'rojo':
        console.log("No cruces");
        break;
    default:
        console.log("no sirve");
}

