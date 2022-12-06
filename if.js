if (true) {
    console.log("Hola");
} // Hola

if (false) {
    console.log("Hola");
} // undefined

if (false) {
    console.log("Hola");
} else {
    console.log("soy falso");
} // soy falso

var edad = 18;

if (edad === 18) {
    console.log("Puedes votar, será tu 1ra votación");
} else if (edad > 18) {
    console.log("Puedes votar de nuevo");
} else {
    console.log("Aun no puedes votar");
} // "Puedes votar, será tu 1ra votación"

// Puedes poner tantos else if como requieras. 

// Otra forma de comparar en JavaScript son los operadores terniarios

condition ? true : false;

// Ejemplo

var numero = 1

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno"

console.log(resultado) // Si soy un uno

var numero = 2;

var resultado = numero === 1 ? "Si soy un uno" : "No, no soy un uno";

console.log(resultado); // No, no soy un uno