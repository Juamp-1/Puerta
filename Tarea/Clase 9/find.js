const edades = [22, 8, 17, 14, 30];

const filtrado = edades.filter(function(edad){
   return edad == 8;
});

const buscado = edades.find(function(edad){
    return edad == 8;
 });
console.log(filtrado); 
console.log(buscado);
