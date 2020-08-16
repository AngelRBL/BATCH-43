 //var musica =[]
//musica.push('reggae', 'pop', 'rock', 'metal', 'electro')
//console.log(musica)

//musica.splice(3,1, 'perritosalchicha')

//--------->Objetos o Object<----------

//----> las llaves {} es para objeto
//----> las cajas [] es para arreglo.

var persona = {
    nombre: 'Ricardo',
    direccion: 'CDMX',
    edad: 22,
    telefono: '564654653465',
    musica: {
        reggeton:{
            JBalvin: ['Rojo','Blanco','Azul']
        },
        cumbia: 'Los Angeles Azules',
        rock: 'AC/DC',
        metal: {
            trash: 'XD',
            classic: ':P'
        }
    },
    peliculas: ['Terror', 'Accion', 'Comedia']
}

console.log(persona.musica.reggeton.JBalvin[0])
// console.log(persona.nombre)
//console.log(persona.edad)

//----> el .json es para guardar datos.
