// ¿Como generar un array o arreglo en JS? 

var frutas = []; // Armo un array vacio

var frutas = ["Manzana", "Plátano", "Cereza", "Fresa"]; // Array de 4 elementos

console.log(frutas); // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']

console.log(frutas.length); // 4 -> Es el largo de nuestro array. Es decir la cantidad de elementos. 

console.log(frutas[0]); // Manzana

console.log(frutas[2]); // Cereza

// Metodos de los arrays que nos permiten operar sobre los mismos.

var masFrutas = frutas.push("Uvas"); // Empuja elementos al final de mi array

console.log(masFrutas); // 5 -> Cantidad de elementos de array frutas con el nuevo elemento empujado

console.log(frutas); // (5) ['Manzana', 'Plátano', 'Cereza', 'Fresa', 'Uvas']

var ultimo = frutas.pop("Uvas"); // Elimina elementos de mi array

console.log(ultimo) // Uvas -> Quedó el elemento eliminado del array frutas

console.log(frutas) // (4) ['Manzana', 'Plátano', 'Cereza', 'Fresa']

var nuevaLongitud = frutas.unshift("Uvas") // Empuja el nuevo elemento al comienzo de mi lista

console.log(nuevaLongitud) // 5 -> Cantidad de elementos del array frutas con la incorporación, de nuevo, de uvas

console.log(frutas) // (5) ['Uvas', 'Manzana', 'Plátano', 'Cereza', 'Fresa']