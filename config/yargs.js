const descripcion = {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
};

const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
};


const argv = require('yargs')
                .command('crear', 'Crear un elemento por hacer', {
                    descripcion
                })

                .command('actualizar', 'actualiza el estado completado de una tarea', {
                    descripcion,
                    completado
                })
                .command('borrar', 'borra una entrada de una tarea', {
                    descripcion
                })


        .help()
        .argv;

module.exports = {
    argv
}



