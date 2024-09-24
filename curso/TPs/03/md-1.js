/*

Micro desafío 1:
Instrucciones
1. Crea una carpeta de trabajo y dentro de ella un archivo JavaScript (.js).
2. Desarrolla un programa que le indique al usuario - en base a su perfil o
responsabilidades - qué puede hacer o no en el sistema. Para eso debes
crear una variable llamada: “perfil” y asignarle alguno de estos valores:
a. administrador
b. asistente
c. invitado.
Es importante tener en cuenta que se debe mostrar un único mensaje, utilizando el
console.log():
● Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el
mensaje: “Debe especificar el perfil del usuario”.
● Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la
consola debe mostrar este mensaje: “Usted tiene todos los privilegios de
uso del sistema”.
● Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar
este mensaje: “Usted sólo tiene permisos de registrar, modificar y
consultar datos”.
● Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este
mensaje: “Usted sólo tiene permisos de consultar datos”.
● Si se especifica un valor diferente a la variable perfil entonces se debe mostrar
este mensaje: “Debe especificar un perfil válido”.
Para probar las diferentes respuestas asigna diferentes valores a la variable “perfil”
creada.

*/
// Crear una variable llamada "perfil" y asignarle alguno de estos valores:
var perfil = "administrador - ADMINISTRADOR - Administrador";
// Si se le asigna un espacio en blanco a la variable perfil, debe mostrar el mensaje:

if (perfil == "") {
  console.log("Debe especificar el perfil del usuario");
} else {
}
// Si es un perfil “administrador - ADMINISTRADOR - Administrador”, la consola debe mostrar este mensaje:
if (perfil == "administrador - ADMINISTRADOR - Administrador") {
  console.log("Usted tiene todos los privilegios de uso del sistema");
}
// Si es un perfil “asistente - ASISTENTE - Asistente”, la consola debe mostrar este mensaje:
else if (perfil == "asistente - ASISTENTE - Asistente") {
  console.log(
    "Usted sólo tiene permisos de registrar, modificar y consultar datos"
  );
}
// Si es un perfil “invitado - INVITADO - Invitado”, la consola debe mostrar este mensaje:
else if (perfil == "invitado - INVITADO - Invitado") {
  console.log("Usted sólo tiene permisos de consultar datos");
}
// Si se especifica un valor diferente a la variable perfil entonces se debe mostrar este mensaje:
else {
  console.log("Debe especificar un perfil válido");
}
