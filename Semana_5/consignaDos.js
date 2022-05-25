const edades = [11, 12, 15, 18, 25, 22, 10, 33, 18, 5];

// Edades menores a 18

function edadesMenores(array) {
    let menoresEdad = [];
    for(let i = 0;i < array.length; i++){
        if (array[i] < 18){
            menoresEdad.push(array[i])
        }
    }
    return menoresEdad;
}

let edadesMenoresNuevo = edadesMenores(edades);
//console.log(edadesMenoresNuevo);

// Edaddes mayores a 18

function edadesMayores(array) {
    let mayoresEdad = [];
    for(let i = 0;i < array.length; i++){
        if (array[i] > 18){
            mayoresEdad.push(array[i])
        }
    }
    return mayoresEdad;
}
let edadesMayoresNuevo = edadesMayores(edades);
//console.log(edadesMayoresNuevo);

// Menor edad

function edadMenor(array) {
    return Math.min.apply(Math, array);
}
//console.log(edadMenor(edades));

// Mayor edad

function edadMayor(array) {
    return Math.min.apply(Math, array);
}
//console.log(edadMayor(edades));

function menorEdad (array) {
    let menor = array[0];
    for (let i=1; i < array.length; i++) {
        if (array[i] < menor) {
            menor = array[i]
        }
    }
    return menor;
}

// Promedio de edades

function promedioEdades(array) {
    let promedio = 0;
    for (let i = 0; i < array.length; i++){
        promedio = array[i] + promedio;
    }
    return  promedio / array.length;
}
let promedio = promedioEdades(edades);
//console.log(promedio);

// Incrementar las edades en 1

function incremento(array) {
    for (let i = 0; i < array.length; i++){
        array[i] = array[i] + 1;
    }
    return array;
}
let incrementoEdad = incremento(edades);
//console.log(incrementoEdad);

// Parte dos

const arrayCuentas =
[
    {
        titular: "Arlene Barr",
        estaHabilitada: false,
        saldo: "$3,253.40",
        edadTitular: 33,
        tipoCuenta: "sueldo"
    },

    {
        titular: "Roslyn Torres",
        estaHabilitada: false,
        saldo: "$3,229.45",
        edadTitular: 27,
        tipoCuenta: "sueldo"
    },

    {
        titular: "Cleo Lopez",
        estaHabilitada: true,
        saldo: "$1,360.19",
        edadTitular: 34,
        tipoCuenta: "corriente"
    },

    {
        titular: "Daniel Malone",
        estaHabilitada: false,
        saldo: "$3,627.12",
        edadTitular: 30,
        tipoCuenta: "sueldo"
    },

    {
        titular: "Ethel Leon",
        estaHabilitada: true,
        saldo: "$1,616.52",
        edadTitular: 34,
        tipoCuenta: "sueldo"
    },
    {
        titular: "Harding Mitchell",
        estaHabilitada: true,
        saldo: "$1,408.68",
        edadTitular: 25,
        tipoCuenta: "corriente"
    }
]    

// Edades menores a 30

function cuentasMenores(array) {
    let cuentasMenoresGrupoUno = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].edadTitular < 30) {
            cuentasMenoresGrupoUno.push(array[i]);
        }
    }
    return cuentasMenoresGrupoUno;
}

let cuentasMenoresGrupoA = cuentasMenores(arrayCuentas);
//console.log(cuentasMenoresGrupoA);

//Edades mayores a 30

function cuentasMayores(array) {
    let cuentasMayoresGrupoUno = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].edadTitular > 30) {
            cuentasMayoresGrupoUno.push(array[i]);
        }
    }
    return cuentasMayoresGrupoUno;
}

let cuentasMayoresGrupoA = cuentasMayores(arrayCuentas);
//console.log(cuentasMayoresGrupoA);

//Edades igual a 30

function cuentasigualesATreinta(array) {
    let cuentasIguales = [];
    for(let i = 0; i < array.length; i++){
        if (array[i].edadTitular === 30) {
            cuentasIguales.push(array[i]);
        }
    }
    return cuentasIguales;
}

let cuentasIgualesTreinta = cuentasigualesATreinta(arrayCuentas);
//console.log(cuentasIgualesTreinta);

//Edad menor

function cuentasEdadMenor(array) {
    let cuentaEdadMenor = [];
    for(let i = 0; i < array.length; i++){ 
        //cuentaEdadMenor = Math.min.apply(Math, array[i].edadTitular);
    }
    
}

let cuentasConEdadMenor = cuentasEdadMenor(arrayCuentas);
//console.log(cuentasConEdadMenor);

// Array tipo de cuenta

let cuentaSueldo = [];
let cuentaCorriente = [];

function tipoCuenta(array) {
    for (let i = 0; i < array.length; i++){
        if (array[i].tipoCuenta == "sueldo") {
            cuentaSueldo.push(array[i]);
        } else{
            cuentaCorriente.push(array[i])
        }
    }
    return (cuentaCorriente, cuentaSueldo);
}

let tiposDeCuenta = tipoCuenta(arrayCuentas);
//console.log(tiposDeCuenta);

//console.log(cuentaSueldo);

//Cuenta habilitada 

function cuentaHabilitada(array) {
    let cuentasHabilitadas = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].estaHabilitada === true) {
            cuentasHabilitadas.push(array[i]);
        }
    }
    return cuentasHabilitadas;
}

let cuentasHabilitadaA = cuentaHabilitada(arrayCuentas);
//console.log(cuentasHabilitadaA);

//Cuentas deshabilitadas

function cuentaHabilitada(array) {
    let cuentasDeshabili = [];
    for (let i = 0; i < array.length; i++){
        if (array[i].estaHabilitada === false) {
            cuentasDeshabili.push(array[i]);
        }
    }
    return cuentasDeshabili;
}

let cuentaDeshabilitada = cuentaHabilitada(arrayCuentas);
//console.log(cuentaDeshabilitada);

// Cuenta con menor saldo

function cuentaMenorSaldo(array) {
    let cuentaMenor = 0;
    cuentaMenor = Math.min.apply(Math, array.saldo)
    return cuentaMenor;
}
let cuentaConMenorSaldo = cuentaMenorSaldo(arrayCuentas);
console.log(cuentaConMenorSaldo);

//Otra solucion 

function cuentaMenorSaldo(array){
    let calcularSaldoMenor = array[0].saldo
    for(let i = 1; i < array.length ;i++){
        if(array[i].saldo < calcularSaldoMenor){
            calcularSaldoMenor = array[i].saldo
        }
    }
    return calcularSaldoMenor;
}

console.log(cuentaMenorSaldo(arrayCuentas));
