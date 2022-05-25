/*
//Condicional IF, elseif
let clima = "Martes";
let dia = "Lunes";

if(clima == "Soleado" && dia == "Lunes"){
    console.log("lindo dia para pasear");
} else if(clima == "Soleado" && dia == "Lunes"){
    console.log("Podria salir igual");
}else{
    console.log("Mejor me quedo en casa practicando JavaS");
}
*/

let dato = true;
if(dato = false){
    console.log("Dato es verdadero")
}else{
    console.log("Dato es falso")
}

// If tenario: condicion ? lo que pasa es es verdadero :  lo que pasa si si es falso

4 > 10 ? console.log("El 4 es el mas grande") : console.log("El 10 es mas grande");

//Switch

function probandoSwitch(num){
    switch (num) {
        case 1:
            console.log("Elegiste el dia lunes");
            break;
        case 2:
            console.log("Elegiste el dia martes");
            break;
        default:
            console.log("No elegiste el numero correcto");
            break;
    }
}