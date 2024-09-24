const prompt = require("prompt-sync")({ sigint: true });
const {
  listarTareas,
  agregarTarea,
  actualizarEstado,
  eliminarTarea,
  filtrarTareasPorEstado,
} = require("./moduloTareas.js");

function mostrarMenu() {
  console.clear();
  console.log("*********MENU********");
  console.log("1. LISTAR tareas");
  console.log("2. AGREGAR nueva tarea");
  console.log("3. ACTUALIZAR tarea");
  console.log("4. ELIMINAR tarea");
  console.log("5. FILTRAR tareas");
  console.log("0. SALIR de app");
  console.log("********************");
}

function mostrarInterfaz() {
  let opcion = -1;
  while (opcion != 0) {
    mostrarMenu();
    opcion = +prompt("Elegí una OPCIÓN: ");
    console.clear();

    let idTarea;
    let respuesta;
    let estado;

    switch (opcion) {
      case 1:
        console.log("LISTANDO tareas...");
        listarTareas();
        break;
      case 2:
        console.log("AGREGANDO tarea");
        let nombre = prompt("Escribe el nombre de al tarea: ");
        agregarTarea(nombre);
        break;
      case 3:
        console.log("ACTUALIZANDO tarea");
        listarTareas();
        idTarea = prompt("Escriba el ID de tarea a ACTUALIZAR: ");
        respuesta = actualizarEstado(idTarea);
        console.log(respuesta);

        break;
      case 4:
        console.log("ELIMINANDO tarea");
        listarTareas();
        idTarea = prompt("Escriba el ID de tarea a ELIMINAR: ");
        respuesta = eliminarTarea(idTarea);
        console.log(respuesta);

        break;
      case 5:
        console.log("FILTRANDO tareas");
        let estado = "x"
        while (estado.toLowerCase() !== "p" && estado.toLocaleLowerCase() !== "f" ) {
            estado = prompt("Filtrar tareas pendientes (P) o finalizadas (F)? ");
        }
        filtrarTareasPorEstado(estado)
        break;
      case 0:
        console.log("GRACIAS TOTALES!!!");
        break;
      default:
        console.log("Opción INCORRECTA!!");
        break;
    }
    if (opcion != 0) {
      prompt("Presiona una tecla...");
    }
  }
}

mostrarInterfaz();
