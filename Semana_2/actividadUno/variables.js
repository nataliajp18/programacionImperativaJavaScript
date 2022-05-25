const prompt = require("prompt-sync")({ sigint: true });

let nombre = prompt("Ingresar nombre");
console.log("Su nombre es: " + nombre);