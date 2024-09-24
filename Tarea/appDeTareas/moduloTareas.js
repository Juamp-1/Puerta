const fs = require("fs");
const colors = require('colors');

function leerJSON() {
  const jsonCrudo = fs.readFileSync("./tareas.json", "utf-8");
  return JSON.parse(jsonCrudo);
}

function escribirJSON(tareas) {
  fs.writeFileSync("./tareas.json", JSON.stringify(tareas, null, 2), "utf-8");
}

function Tarea(nombre) {
  this.id = leerJSON()[leerJSON().length - 1].id + 1;
  this.nombre = nombre;
  this.estado = "pendiente";
}

function listarTareas(tareas = leerJSON()) {
  tareas.forEach(({ id, nombre, estado }) => {
    console.log(`${id}`.green, `- ${nombre}`, "|", estado === "pendiente" ? `${estado}`.yellow : `${estado}`.bgGreen);
  });
}

function agregarTarea(nombre) {
  let tareas = leerJSON();
  let tarea = new Tarea(nombre);
  tareas.push(tarea);
  escribirJSON(tareas);
}

function actualizarEstado(id) {
  //verificar que exista la tarea con ese ID
  const tareas = leerJSON();
  const tareaEncontrada = tareas.find((tarea) => tarea.id === +id);
  if (!tareaEncontrada) {
    return "Tarea no encontrada";
  }

  //actualizar el estado de la tarea
  const tareasActualizadas = tareas.map((tarea) => {
    if (tarea.id === +id) {
      tarea.estado = "finalizada";
    }
    return tarea;
  });

  //guardar los cambios
  escribirJSON(tareasActualizadas);

  return "Tarea actualizada con éxito!!";
}

function eliminarTarea(id) {
  //verificar si existe la tarea
  const tareas = leerJSON();
  const tareaEncontrada = tareas.find((tarea) => tarea.id === +id);
  if (!tareaEncontrada) {
    return "Tarea no encontrada";
  }

  //eliminar la tarea
  const tareasPersistentes = tareas.filter((tarea) => {
    return tarea.id !== +id;
  });

  //guardar los cambios
  escribirJSON(tareasPersistentes);

  return "Tarea eliminada con éxito!!";
}

function filtrarTareasPorEstado(estado) {
  let tareas = leerJSON();
 

  let estadoTexto = estado.toLowerCase() === "p" ? "pendiente" : "finalizada";
  console.clear()
  console.log("Tareas " + estadoTexto + "s");

  const tareasFiltradas = tareas.filter((tarea) => tarea.estado === estadoTexto);

  listarTareas(tareasFiltradas)
}

module.exports = {
  listarTareas,
  agregarTarea,
  actualizarEstado,
  eliminarTarea,
  filtrarTareasPorEstado,
};
