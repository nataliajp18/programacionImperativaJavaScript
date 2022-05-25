//Actividad 1

/*let edad = 21;

if (edad < 18 && edad > 0) {
  console.log("No puede pasar al bar.");
} else if (edad <= 21 && edad > 18) {
  console.log("Puede pasar al bar, pero no puede tomar alcohol");
  if (edad == 21) {
    console.log("Felicitaciones por haber llegado a la mayoria de edad.");
  }
} else if (edad < 0) {
  console.log("Error, edad invalida. Por favor ingrese un numero valido");
} else {
  console.log("Puede pasar al bar y tomar alcohol.");
}

if (edad % 2 > 0) {
  console.log("¿Sabias que tu edad es impar?");
}*/

//Actividad 2

/*function totalAPagar(vehiculo, litrosConsumidos) {
  let litros;
  let litrosFinales;
  switch (vehiculo) {
    case "coche":
      litros = litrosConsumidos * 86;
      break;
    case "moto":
      litros = litrosConsumidos * 70;
      break;
    case "autobus":
      litros = litrosConsumidos * 55;
      break;

    default:
      console.log("El vehiculo no esta registrado.");
      break;
  }

  if (litrosConsumidos > 0 && litrosConsumidos <= 25) {
    litrosFinales = litros + 50;
  } else {
    litrosFinales = litros + 25;
  }

  console.log("Precio final: " + litrosFinales);
  return litrosFinales;
}

totalAPagar("autobus", 25);*/

//Actividad 3

/*function armarSandwitch(
  tipoSandwitch,
  tipoPan,
  queso,
  tomate,
  lechuga,
  cebolla,
  mayonesa,
  mostaza
) {
  let precioTotal;
  if (tipoSandwitch == "pollo") {
    precioTotal = 150;
  } else if (tipoSandwitch == "carne") {
    precioTotal = 200;
  } else if (tipoSandwitch == "veggie") {
    precioTotal = 100;
  } else {
    console.log("No tenemos ese sandwitch");
  }

  if (tipoPan == "blanco") {
    precioTotal = precioTotal + 50;
  } else if (tipoPan == "negro") {
    precioTotal = precioTotal + 60;
  } else if (tipoPan == "sin gluten") {
    precioTotal = precioTotal + 75;
  } else {
    console.log("No tenemos ese tipo de pan");
  }

  if (queso == true) {
    precioTotal = precioTotal + 20;
  }
  if (tomate == true) {
    precioTotal = precioTotal + 15;
  }
  if (lechuga == true) {
    precioTotal = precioTotal + 10;
  }
  if (cebolla == true) {
    precioTotal = precioTotal + 15;
  }
  if (mayonesa == true) {
    precioTotal = precioTotal + 5;
  }
  if (mostaza == true) {
    precioTotal = precioTotal + 5;
  }

  console.log("El total a abonar es: $" + precioTotal);
  return precioTotal;
}

armarSandwitch("carne", "blanco", true, false, true, true, false, true);*/

//Activisas extra

/*function numero(num) {
  let random = Math.floor(Math.random() * (11 - 1) + 1);

  if (num === random) {
    console.log("Felicitaciones has acertado el número secreto!");
  } else {
    console.log("Lo siento fallaste, el número secreto es: " + random);
  }
}

numero(5);*/