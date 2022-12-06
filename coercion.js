// Coerción implicita: Cuando cambiamos el tipo de dato sin explicitarlo
// ejemplo:

var a = 20 // Number
var b = "7" // String

var c = a + b // resultado = 207 xq concatena todo como string

var d = a * b // resultado = 140 xq multiplica previa transfor de b de string a int

// Coerción explicita: 
// ejemplo:

var e = String(a) 
typeof e // "string" ya que lo transforme de int a string con el metodo String()

var f = Number(c) // "number" xq lo transformo de forma coercitiva
