
  const descripcion = {
    demand: true,
    alias: 'd',
    desc: "Descripcion de la tarea por hacer"
  };
  const completado = {

                  default: true,
                  alias: 'c',
                  desc: "Marca como completado o pendiente la tarea"
  };

  const argv = require('yargs')
              .command('crear', 'Crear un elemento por hacer', {descripcion})
              .command('borrar', 'Elimina un elemento por hacer', {descripcion})
              .command('actualizar', 'Actualiza el estado completado de una tarea', {descripcion,completado})
              .help().argv;


  // Modulo que exporta la funcion argv
  module.exports = {
    argv
  }
