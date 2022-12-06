// switch es una alternativa al if, con multiple else if
// Cada if se plantea como un case y el else se plantea como 
// default

var numero = 1;

switch (numero) {
    case 1: 
        console.log("Soy uno")
        break;
    case 2:
        console.log("Soy dos");
        break;
    case 3:
        console.log("Soy tres");
        break
    default:
        console.log("No soy nada de lo anterior")
} // Soy uno

var numero = 3;

switch (numero) {
    case 1: 
        console.log("Soy uno")
        break;
    case 2:
        console.log("Soy dos");
        break;
    case 3:
        console.log("Soy tres");
        break
    default:
        console.log("No soy nada de lo anterior")
}  // Soy tres

var numero = 5;

switch (numero) {
    case 1: 
        console.log("Soy uno")
        break;
    case 2:
        console.log("Soy dos");
        break;
    case 3:
        console.log("Soy tres");
        break
    default:
        console.log("No soy nada de lo anterior")
} // No soy nada de lo anterior