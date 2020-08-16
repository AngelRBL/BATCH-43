// Vanilla JS
// function saludos(){
//     console.log('hola')
// }
// saludos()

// var saludo2 = function(){
//     console.log('hola')
// }
// saludos()

// ECMAS 5

// let --> variable
// const // variable constante

// let num1 = 10
// console.log(num1)
// num1 = 'que onda'
// console.log(num1)




//---------------->arrow Fuction<---------
// se le conoce como funciones anonimas porque no tienen nada

// const saludonombre = (x) => {
//     console.log(x+ 'js dice hola')
// }
//  //               x
// saludonombre ('Ricardo')
// saludonombre('juan')
// saludonombre('hector')
// saludonombre('maura')
// saludonombre()

// const suma = (num1, num2) => {
//     console.log(num1 + num2)
// }
// suma(10, 50)
// suma(10005450945, .56985165)

//--------------challenge---------------
// 1
// funcion que reste
// multiplique
// 2----->preguntar al usuario
// el area de un cuadrado
// el area de un rectangulo
// el area de un triangulo

const resta = (num1, num2) =>{
    console.log(num1 - num2)
}
resta(500, 10)

const multiplique = (num3, num4) => {
    console.log(num3 * num4)
}
multiplique(500, 100)

let base2 = prompt('ingrese el valor de la base')
const base2 =() =>{
    console.log('el area del cuadrado es :'+ (base2 * base2))
}


let Base=prompt('Ingrese el valor de la Base','');

//Ingresando altura
let Altura=prompt('Ingrese el valor de la Altura','');
console.log('el area del rectangulo es :'+(Base * Altura))


const areaTriangulo = ( b = Number(prompt('Ingresa la base el triangulo')), h = Number(prompt('Ingresa la altura el triangulo')) ) => {
    console.log('El area del triangulo es : ' + ((b*h) / 2))
}

areaTriangulo()