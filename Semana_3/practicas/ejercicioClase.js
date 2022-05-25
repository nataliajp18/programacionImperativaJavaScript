function puedeSubir (altura, acompanado) {
    if (altura >= 1.40 && altura < 2) {
        return true;
    }
    else if(altura < 1.40 && altura >= 1.20 && acompanado == true){
        return true;
    }
    else{
        return false;
    }
}

console.log(puedeSubir(1.50, false));

// Buenas practicas

function puedeSubir (altura, acompanado) {
    if ((altura >= 1.40 && altura < 2) || (altura < 1.40 && altura >= 1.20 && acompanado == true)) {
        return true;
    }
    else{
        return false;
    }
}

console.log(puedeSubir(1.50, false));
