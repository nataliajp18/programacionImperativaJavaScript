//Quien pasa al bar 
/*
function entradaBar(edad) {   
    if(edad < 0){
        console.log("Error, edad invalida. Por favor ingrese otro dato.");
    }else if(edad < 18) {
        console.log("No puede pasar al bar.")
    }else if (edad < 21){
        console.log("Puede pasar al bar, pero no puede tomar alcohol.")
        if(edad % 2 != 0){
            console.log("Sabias que tu edad es impar");
        }
    }else {
        if(edad === 21){
            console.log("Bienvenido, Felicitaciones por tener la mayoria de edad");
                if(edad % 2 !=0){
                    console.log("Sabias que tu edad es impar");
                }
        }
        console.log("Puede pasar al bar y tomar alcohol.")
        }
}console.log(entradaBar(23));

//Ejercicio vehiculos

function totalPagar(vehiculo, litroConsumido) {
    let precioLitro = 0;
    switch (vehiculo) {
        case "coche":
            precioLitro = 86;
        break;
        case "moto":
            precioLitro = 70;
        break;
        case "autobus":
            precioLitro = 55;
        break;
    }

    if(litroConsumido > 0 && litroConsumido < 25){
        precioLitro = precioLitro + 50;
    }else{
        precioLitro = precioLitro + 25;
    }
    return precioLitro;
}
console.log(totalPagar("autobus", 26));
*/

//Ejercicio Sandwiches

function pedido(base, tipoPan) {

    let precioBase;
    let clasePan;
    //let tipoadicional;

    switch (base) {
        case "pollo":
            precioBase = 150;
        break;
        case "carne":
            precioBase = 200;
        break;
        case "vegetariano":
            precioBase = 100;
        break;
    }
    switch (tipoPan) {
        case "Blanco":
            clasePan = 50;
        break;
        case "Negro":
            clasePan = 60;
        break;
        case "Sin gluten":
            clasePan = 75;
        break;
    }
    return precioBase + clasePan;
}
//console.log(pedido("vegetariano","Sin gluten"));

// Duda como hacer la parte de valores booleanos: Para finalizar, el sistema avanza preguntando al cliente si quiere los siguientes adicionales:
/*● Queso = $20
● Tomate = $15
● Lechuga = $10
● Cebolla = $15
● Mayonesa = $5
● Mostaza = $5
Cada uno de estos adicionales están representados por booleanos —es decir, true o
false—, dependiendo de si aceptan o no cada uno de los adicionales —nos llegan un
total de seis valores booleanos, uno por cada adicional—.
Nuestro trabajo es crear una función que reciba estos ocho parámetros —un string
para el sándwich base, uno para el pan y los seis booleanos de los adicionales—. La
función deberá consultar primero qué tipo de sándwich base se seleccionó, luego el
tipo de pan, y por último deberá verificar qué adicionales se seleccionaron.
Finalmente, deberá retornar el valor numérico del total a pagar del cliente.*/

//Numero secreto

function numeroSecreto(num) {
    let numero = Math.random() * 10;
    let numeros = Math.round(numero);
    if (numeros == num) {
        //console.log("Felicitaciones hallaste el numero secreto");
    }
    else{
        //console.log("Fallaste!, el numero ingresado fue: " + num + " y el numero secreto era: " + numeros);
    }
    return;
}
//console.log(numeroSecreto(3));

//Paracaidas

function abrirParacaidas(velocidad, altura) {
    if (velocidad < 1000 && altura >= 2000 && altura < 3000) {
        console.log("El paracaidas puede abrirse");
    }else{
        console.log("El paracaidas no puede abrirse");
    }
    return;
}
//console.log(abrirParacaidas(1001, 2500));

//Traductor

function traductor(string) {
    let palabraIngresada;
    switch (string) {
        case "casa":
            palabraIngresada = "house";
        break;
        case "pelota":
            palabraIngresada = "ball";
        break;
        case "arbol":
            palabraIngresada = "tree";
        break;
        case "genio":
            palabraIngresada = "genius";
        break;
        default:
        console.log("La palabra no esta incluida en el listado");
        break;
    }
    return;
}
//console.log("La traduccion de tu palabra es: " + traductor("natalia"));

//Valoracion de peliculas

function valoracion(opinion) {
    let opinionUsuario;
    switch (opinion) {
        case "Muy mala":
            console.log("Calificaste la pelicula como muy mala lo lamentamos mucho.");
        break;
        case "Mala":
            console.log("Calificaste la pelicula como mala, debemos mejorar.");
        break;
        case "Mediocre":
            console.log("Calificaste la pelicula como mediocre, lo tendremos en cuenta.");
        break;
        case "Buena":
            console.log("Calificaste la pelicula como buena, nos encanta tu opinion.");
        break;
        case "Muy buena":
            console.log("Calificaste la pelicula como muy buena, nos alegra mucho, seguiremos complaciendote.");
        break;
        default:
            console.log("Ingresaste un valor invalido, por favor intentalo de nuevo.");
        break;
    }
    return;
}
//console.log(valoracion("excelente"));

// If ternario 
let edad = 17;

edad < 0 && edad < 18 ? console.log("Error, edad invalida. Por favor ingrese otro dato.") : console.log("No puede ingresar al bar");