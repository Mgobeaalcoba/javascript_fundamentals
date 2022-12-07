// loops o ciclos

var estudiantes = ["Maria","Sergio","Rosa","Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);
}

// loop for o "por":

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i])
}

// Output: 

// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

// loop for sin index o "for...of"

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante)
}

// Output: 

// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

// while o "mientras"

while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift(); // Shift va a ir sacando el primer elemento de mi array. Cuando no tenga mas corta el ciclo
    saludarEstudiantes(estudiante)
}

// Output: 

// Hola, Maria
// Hola, Sergio
// Hola, Rosa
// Hola, Daniel

// A diferencia de los ciclos for anteriores, al imprimir sus nombre con 
// la combinación de while + shift mi lista original de estudiantes va a 
// quedar vacia. 