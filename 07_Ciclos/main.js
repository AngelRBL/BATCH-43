// alert("funciona")

//for(variable ; condicion; avance){
//   codigo a ejecutar
// }
// var y let funcionan exactamente igual

// 1.- crear variable
//2.- agregar condicion
//i =0
//i = 1 + 1 = 2
//0 = 2

//for(var i = 0; i < 10 ; i = i + 1 ){
       
//console.log(i)

//}
// resto del codigo

//i = 0 + 1 true

//i = 1 + 1 true

//i = 2 + 1 true

//i = 9 + 1 true

//i = 10

//for(var i = 0; i < 100 ; i = i + 5 ){

//    console.log(i)
//}

//Sintaxis mas comun, el ++ solo agrega 1

//for(var i = 0; i <= 300; i ++){
//    console.log(i)
//}


// ---------------challenge-------------//
// comience en 100 termine en 0 

// empezar en 10 terminar en -250 avanzar de uno en uno

// empezar en -50 y llegar a 500 de 5 en 5 

// empezar en 1000 y llegar a 2000 de 10 en 10

// for(var a =10; a >= -250; a -- ){
//     console.log(a)
// }

// for(var b = -50; b <= 500; b += 5){
//    console.log(b)
// }
// for(var c = 1000; c <=2000; c += 10){
//    console.log(c)
// }
//--------------------------------------------------//

//------------------------Challenge numero 2-------------------------//

// const alumnos = ['osvaldo', 'ricardo', 'juan','mauricio','diego','roberto', 'karla', 'araceli'];

// // console.log(alumnos.length)
// alumnos.push('gerardo');
// alumnos.push('brisa');

// //--> uso mas comun<--/
//  for(var i = 0; i <= 8; i ++){
//     console.log(i +" " + alumnos[i])
// }

// paradigmas
// orientado a objetos
// orientado a funciones



//-------------------------------------------->Repaso<---------------------------------------------
//  inicio     limite     secuencia
// for(var i = 0; i <= 100; i = i ++ ){
//     console.log(i)
// }
//------------>challenge final<---------------------
// 1 -> 100
// si el numero es divisible entre 3 -> fizz
// si el numero es divisible entre 5 -> buzz
// si el numero es divisible enttre 3 y 5 -> fizzBuzz



for(var x = 1; x <= 100; x++ ){
    if(x % 3 === 0 && x % 5 === 0){
        console.log(x + ' : fizzbuzz')
    }else if(x % 5 === 0 ){
        console.log(x + ' : buzz')
    }else if(x % 3 === 0){
        console.log(x + ' : fizz')
    }else{
        console.log(x)
    }   
}