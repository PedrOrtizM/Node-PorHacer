
// FileSystem
const fs = require('fs');
let listaPorHacer = [];



// Funcion para guardar en el archivo .json
const guardarDB = () =>{
  let data = JSON.stringify(listaPorHacer);       // Convierte el array en JSON
  fs.writeFile('db/data.json',data, (err)=>{

    if (err) {
      throw new Error('No se pudo guardar',err);
    }
  });

};


// Funcion para cargar de la  base de datos
 const cargarDB = () =>{

   try {

     listaPorHacer = require('../DB/data.json');

   } catch (e) {
     listaPorHacer = [];
   }

 };




// Función que crea por-hacer y le paso la Descripcion
const crear = (descripcion) =>{

    cargarDB();


    let porHacer = {
        descripcion: descripcion, // reduntante en ECMA6 | descripcion que se pasa por parametro y nombre del atributo
        completado:  false
    };

  listaPorHacer.push(porHacer);
  guardarDB();
  return porHacer;

}


const getListado = () =>{
  cargarDB();
  return listaPorHacer;

}


const actualizar = (descripcion,completado=true)=>{
  cargarDB();

  let index = listaPorHacer.findIndex(tarea =>{
    return tarea.descripcion === descripcion
  });

  if (index >= 0 ) {
    listaPorHacer[index].completado = completado;
    guardarDB();

    return true;

  }
  else {
    return false;
  }

}


const borrar = (descripcion) => {
    cargarDB();

    let index = listaPorHacer.findIndex(tarea =>{
      return tarea.descripcion === descripcion
    });


    if (index >= 0 ) {
      listaPorHacer.splice(index, 1);
      guardarDB();

      return true;

    }
    else {
      return false;
    }


}

// Modulo para exportar las funciones
module.exports = {
  crear,
  getListado,
  actualizar,
  borrar

}
