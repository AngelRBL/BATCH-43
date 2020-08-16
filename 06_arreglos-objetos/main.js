//-------> Arreglo o Array <---------
// los arreglos sirven para almacenar valores

// pocisiones:    0      1      2       3 
var colores = ['negro','rojo','azul','verde' ]

console.log(colores)
//-> acceder a un valor
console.log(colores[2])
console.log(colores[5])

//colores[0] = 'blanco'
//console.log(colores)

//------->.push()
// agregar un elemento en la ultima posicion
//--->el elemento .push simpre pasa el valor al final
colores.push('blanco') //->4
colores.push('naranja')//->5
console.log(colores)
//-----------> .pop()
//--------->Elimina el ultimo valor del arreglo
colores.pop()
console.log(colores)

//-------------- . splice()
// Eliminar valores especificos o sustituirlos

//-> primer valor: en que posicion quieren empezar

//->segundo valor: cuantos valores quieres eliminar

//->tercer valor: elemento que quieres agregar

//colores.splice(1,3)
//console.log(colores)

colores.splice(1, 1, 'prueba')
 console.log(colores)

 //------->Challenge<--------
 //hacer un arreglo de musica vacio
 //agregar 5 generos con el metodo push
 //remplazar la posicion 3 con perritosalchicha y por ultimo borrar elemento vacio
 //Esto es un arreglo vacio:
 // var musica = []


//----------------------------------------------------------//


