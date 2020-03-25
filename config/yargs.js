const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripcion de la tarea'
}

const completado = {
    demand: false,
    alias: 'c',
    default: true,
    desc: 'Marca como compeltado o pendiente la terea.'
}

const argv = require('yargs')
    .command('crear', 'Crea una nueva tarea por hacer', {
        descripcion
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {
        descripcion,
        completado
    })
    .help()
    .argv;

module.exports = {
    argv
}