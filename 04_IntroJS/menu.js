//----vanillaJS-->es la version mas pura

//--------paso 1
var pregunta = prompt("ingresa tu nombre")
var pregunta1 = prompt("ingresa tu edad")
var pregunta2 = prompt("ingresa tu direccion")
var pregunta3 = prompt("ingresa numero de telefono")
console.log(pregunta)
console.log(pregunta1)
console.log(pregunta2)
console.log(pregunta3)
//----------paso2
var anio = 2020

var nacimiento = anio - pregunta1
console.log(nacimiento)

// typeof()---> me indica que tipo de valor es
console.log(typeof(pregunta1))

// number()---->pasa el tipo de valor a numerico
var edadreal = Number(pregunta1)

console.log(edadreal)

console.log(typeof(edadreal))

var nacimiento = anio - edadreal

console.log(nacimiento)

