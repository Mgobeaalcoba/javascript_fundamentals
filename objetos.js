var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020
}; // Esto ya es un objeto con tres propiedades. 

// ¿Como puedo acceder a sus propiedades? 

miAuto // Devuelve todo mi objeto con todas mis propiedades

miAuto.annio // Devuelve solo el año de mi objeto.
miAuto.marca // Devuelve solo la marca de mi objeto. 
miAuto.modelo // Devuelve solo el modelo de mi objeto. 

// Ademas de propiedades como las vistas arriba un objeto puede tener
// funciones propias que serán llamadas "metodos". Ejemplo: 

var miAuto = {
    marca: "Toyota",
    modelo: "Corolla",
    annio: 2020,

    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`)
    } // El this es una variable que hace referencia a su padre el objeto. 
};

// Como accedo al metodo de mi objeto? Así: 

miAuto.detalleDelAuto();

// Los objetos no necesariamente tienen que ser construidos de forma manual
// como en el ejemplo de arriba. Sino que pueden ser construidos mediante una
// función constructora. De la siguiente forma: 

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var auto1 = new auto("Ford", "Ka", 2015)
auto1

var auto2 = new auto("Tesla", "Model 3", 2021)
auto2

// Reto: usar un loop para armar 30 coches nuevos

var objetivo = 30
var autos = [auto1, auto2]

for (let i = 0; i < objetivo; i++) {
    autos.push(new auto("Tesla", `Model${i+4}`, 2022-i))
    console.log(autos)
}

for (let i = 0; i < autos.length; i++) {
    console.log(autos[i])
}