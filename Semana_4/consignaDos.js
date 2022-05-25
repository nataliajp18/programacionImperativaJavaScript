//la lista de clientes.
let arrayCuentas = [
    {
    nroCuenta: 5486273622,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 27771,
    titularCuenta: "Abigael Natte",
    },
    {
    nroCuenta: 1183971869,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 8675,
    titularCuenta: "Ramon Connell",
    },
    {
    nroCuenta: 9582019689,
    tipoDeCuenta: "Caja de Ahorro",
    saldoEnPesos: 27363,
    titularCuenta: "Jarret Lafuente",
    },
    {
    nroCuenta: 1761924656,
    tipoDeCuenta: "Cuenta Corriente",
    saldoEnPesos: 32415,
    titularCuenta: "Ansel Ardley",
    },
    {
    nroCuenta: 7401971607,
    tipoDeCuenta: "Cuenta Unica",
    saldoEnPesos: 18789,
    titularCuenta: "Jacki Shurmer",
    },
];

//Busqueda de cliente

let banco = {
    clientes: arrayCuentas,

    consultaCliente: function (titular) {
    for (let index = 0; index < this.clientes.length; index++) {
        const element = this.clientes[index];
        if (element.titularCuenta == titular) {
        return this.clientes[index];
        }
    }
    }, //Nuevo metodo punto 4
    deposito : function (titula, dinero){
        for (let index = 0; index < this.clientes.length; index++) {
            const element = this.clientes[index];
            if (element.titularCuenta == titula) {
            let saldo = element.saldoEnPesos + dinero;
            return saldo;
            }
        }
    }
    
};

let clienteConsultado = banco.consultaCliente("Jacki Shurmer");
let cuentaConsultada = banco.deposito()
console.log(clienteConsultado);  
