// Hay dos tipos de funciones: funciones declarativos y funcines de expresión.
// funciones declarativas

function miFuncion() {
    return "Hola Mundo";
}

// funciones de expresión o funciones expresivas
// Tmb se conocen como funciones anónimas

var miFuncion2 = function(a,b) {
    return a+b;
}

console.log(miFuncion2(5,8))