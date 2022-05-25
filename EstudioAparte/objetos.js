let gato = {
    nombre : "Pacha",
    edad : 14,
    color : ["Amarilla", "Blanca"],
    peso : "3 kilos",
    hacerRuido : function(){
        return "Miau miau, soy " + this.nombre + "tengo" + this.edad;
    }
}

let perro = {
    nombre : "Duncan",
    edad : 18,
    color : "Blanco",
    peso : "6 kilos"
}

perro.peso = "8 kilitos"
console.log(perro);
