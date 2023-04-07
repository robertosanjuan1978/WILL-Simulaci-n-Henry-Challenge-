/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function filtrar(funcion) {
  // Escribi una función filtrar en el prototipo de Arrays,
  // que recibe una funcion (callback) que devuelve true o false.
  // filtrar los elementos de ese arreglo en base al resultado de esa funcion
  // comparadora, devolver un nuevo arreglo con los elementos filtrados.
  // NO USAR LA FUNCION FILTER DE LOS ARREGLOS.
  // ej:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }]
  // productos.filtrar(function(p) {
  //   return p.price >= 50;
  // }) => [{price: 100, name:'tv'}]

  Array.prototype.filtrar = function (funcion) {
    var result = []; // Array para almacenar los elementos filtrados

    for (var i = 0; i < this.length; i++) {
      if (funcion(this[i])) {
        // Llamamos a la función callback y evaluamos el resultado
        result.push(this[i]); // Si es true, agregamos el elemento al nuevo array
      }
    }

    return result; // Devolvemos el nuevo array con los elementos filtrados
  };

  // Ejemplo de uso:
  // var productos = [{
  //   price: 100,
  //   name: 'tv'
  // }, {
  //   price: 50,
  //   name: 'phone'
  // }, {
  //   price: 30,
  //   name: 'lamp'
  // }];

  // var resultado = productos.filtrar(function(p) {
  //   return p.price >= 50;
  // });

  // console.log(resultado); // Output: [{price: 100, name:'tv'}]
}

// No modifiques nada debajo de esta linea //

module.exports = filtrar;
