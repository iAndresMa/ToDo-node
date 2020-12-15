const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}

const completato = {
    demand: true,
    alias: 'c',
    desc: 'Marca comlpetado la tarea'
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', { descripcion })
    .command('borrar', 'Elimina un elemento por hacer', { descripcion })
    .command('actualizar', 'Actualizar el estadi completado de una tarea', { descripcion, completato })
    .help()
    .argv;

module.exports = {
    argv
}