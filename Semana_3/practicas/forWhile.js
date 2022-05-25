/* function loro(texto){
    for(n = 1; n <= 5; n++){
        console.log(texto);
    };
};

loro("Hola")
*/

function noParesDeContarImparesHasta(numero){
    let contadorImpares = 0;

    for(let i = 0; i <= numero; i++ ){
        if (i % 2 != 0){
            contadorImpares++;
        }   
    }

    return contadorImpares;

}

console.log(noParesDeContarImparesHasta(10))

function mostrarNumeros(){
    for (let i = 0; i <= 10; i++) {
        console.log(i);
}
}

function mostrarNumeroWhile(){
    let i=0;
    while (i >= 10) {
        console.log(i);
        i++;
    }
}

function mostrarNumeroDo() {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i >= 10);
}

function contador() {
    for(let i=0; i <= 10; i++){
        console.log(i);
    }

    for (let i = 10; i >= 0; i--){
        console.log(i);
    }
}