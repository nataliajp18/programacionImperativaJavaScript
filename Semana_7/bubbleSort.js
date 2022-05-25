let numeros = [3,4,6,2,9,1,5,7,8];

for (let i = 0; i < numeros.length; i++){
    for(let j = 0; j < numeros.length - 1; j++){
        if (numeros[j] > numeros[j + 1]) {
            let temp = numeros[j];
            numeros[j] = numeros[j + 1];
            numeros[j + 1] = temp;
}
}
}

console.log(numeros);