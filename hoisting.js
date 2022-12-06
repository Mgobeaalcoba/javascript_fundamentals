console.log(miNombre)

var miNombre; // Declaro variable / Es lo mismo que var miNombre = undefined

// Hoisting es cuando mando a llamar a una variable antes de declararla 
// y/o inicializarla

miNombre = "Mariano" // Asigno variable

// El hoisting puede ocurrir con las variables
// A las funciones si puedo llamarlas antes de declararlas pero
// tengo que garantizar que las variables globales hayan sido 
// declaradas previamente

// Buena practica: declarar las funciones antes, principalmente
// al principio de cada archivo