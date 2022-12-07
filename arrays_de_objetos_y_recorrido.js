var articulos = [
    { nombre: "Bici", costo: 3000 },
    { nombre: "Televisión", costo: 2500},
    { nombre: "Libro", costo: 320 },
    { nombre: "Celular", costo: 10000 },
    { nombre: "Laptop", costo: 20000 },
    { nombre: "Teclado", costo: 500 },
    { nombre: "Audifonos", costo: 1700 }
];

// metodos para recorrer el array
// 1°: Filter = metodo que va a generar un nuevo array con aquellos que cumplan con un filtro

var articulosFiltrados = articulos.filter(function(articulo) {
    return articulo.costo <= 500
});

articulosFiltrados; // Output: 2. Libro y Teclado
// No modifica mi primer array sino que crea otro que cumpla la condición

// 2°: Map = metodo para "mapear" ciertos articulos sin modificar mi array original

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
}) // Solo me quedo con los nombres de mis articulos que están compuestos por nombre y costo

nombreArticulos // (7)[ Bici,Televisión,Libro,Celular,Laptop,Teclado,Audifonos ]

// 3°: Find = metodo para encontrar algo dentro de un array. Si el articulo existe lo voy a regresar
// si el articulo no existe no lo voy a regresar. En caso de que exista nos va a generar un nuevo array

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
}) // Va a armar un nuevo array con todos los articulos que tengan de nombre "Laptop"

encuentraArticulo // { costo:20000,nombre:Laptop }

// 4°: forEach = Recorre mi array completo y me sirve para que me regrese cosas. No genera
// un nuveo array

articulos.forEach(function(articulo) {
    console.log(articulo.nombre)
}) 

// Output: 
/*
Bici
Televisión
Libro
Celular
Laptop
Teclado
Audifonos
*/





