function dominio(string){
    let url = "http://www." + string
    return url;
}

//console.log(dominio("digitalhouse.com.ar"));

//Segundo

function reemplazoFastFast (string, stringDos, stringTres){
    let reemplazo = string.replace(stringDos, stringTres);
    return reemplazo;
}

//console.log(reemplazoFastFast("hola mundo","mundo","amor"));

//Tercero

function menciona(stringa, stringb){
    if(stringa.indexOf(stringb) != -1){
        return true;
    } else{
        return false;
    }
}
//console.log(menciona("hola casa", "casa"));

//Cuarto

let frase = 'Hola!, soy Carli';

let licenciada = frase.slice(10,16);

console.log(licenciada);
