let likes = [2,5,4,34,454,566,325,245,243,98,95,345,2345,12,23];

//Organizar de mayor a menor el numero de likes de los fotografos

for(let i = 0; i < likes.length; i++){
    for(let j = 0; j < likes.length - 1; j++){
        if(likes[j] < likes[j + 1]){
            let temp = likes[j];
            likes[j] = likes[j + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            likes[j + 1] = temp;
        }
    }
}

//console.log(likes);

//Objeto

let registros = [
    {
        registro : "Uno",
        dia : 1,
        mes : 4, 
        temperatura: 23
    },

    {
        registro : "Dos",
        dia: 5,
        mes : 5, 
        temperatura: 37
    },
    {
        registro : "Tres",
        dia: 9,
        mes : 1,
        temperatura:  18
    },
    {
        registro : "Cuatro",
        dia : 3,
        mes : 5,
        temperatura: 35,

    }
];

//Orden segun la temperatura de mayor a menor 

for(let i = 0; i < registros.length; i++){
    for(let j = 0; j < registros.length - 1; j++){
        if(registros[j].temperatura < registros[j + 1].temperatura){
            let temporal = registros[j];
            registros[j] = registros[j + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            registros[j + 1] = temporal;
        }
    }
}
console.log(registros);

//Orden segun la temperatura de menor a mayor

for(let i = 0; i < registros.length; i++){
    for(let j = 0; j < registros.length - 1; j++){
        if(registros[j].temperatura > registros[j + 1].temperatura){
            let temporal = registros[j];
            registros[j] = registros[j + 1] //Pisar lo que tengo antes y guardo lo que tengo ahora en esa posicion
            registros[j + 1] = temporal;
        }
    }
}
console.log(registros);