//var password = "perritosalchicha1"
//
//var password = prompt("ingresa tu contraseña")
//console.log(password)
//
//if (password === "perritosalchicha1"){
//    console.log("bienvenido")
//}else {
//    console.log("vuelva a intentalo de nuevo")

// Le van a preguntar al usuario que les de un numero.
// Van a decir si este numero es par o es impar.
// modulo -> % <-


//var ask_numer = Number(prompt('Dime cualquier numero'))
//
if(ask_numer % 2 === 0 ){
   console.log(ask_numer + ' es par')
}else if (ask_numer % 2 === 1){
   console.log(ask_numer + ' es impar')
}else{
   console.error('Datos incorrectos')
}

// --------- Challege Piedra Papel o Tijera --------
// Van a hacer el juego de piedra pepel o tijera
// 2 jugadores --> en la consola mostrar que jugador gano


var jugador1 = prompt('piedra papel o tijera')
var jugador2 = prompt('piedra papel o tijera')

if(jugador1===jugador2){
    console.log('empate')
}else if (jugador1 === 'papel' && jugador2 === 'piedra' || jugador1 === 'piedra' && jugador2 === 'tijera' || jugador1 === 'tijera' && jugador2 === 'papel' ){
    console.log('gana el jugador1')
}else if (jugador2 === 'papel' && jugador1 === 'piedra' || jugador2 === 'piedra' && jugador1 === 'tijera' || jugador2 === 'tijera' && jugador1 === 'papel' ){
    console.log('gana el jugador2')
}else {
    console.log('datos incorrectos')
}
