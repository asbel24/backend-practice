
function mayuscula(nombre) {
    //La función recibe un nombre y debe devolver el mismo 
    // que recibe pero con su primer letra en mayúscula
    //ej: Recibe "mario" ----> Devuelve "Mario"
    //Tu código:

        

    let letraMayuscula = nombre.charAt().toUpperCase()

    return     letraMayuscula + nombre.slice(1);
  
         
        
  }

  console.log(mayuscula("manzana"))



  function invocarCallback(cb) {
    // Invoca al callback `cb`
    //Tu código:
  
    cb();
  }

  function operacionMatematica(n1, n2, cb) {
    //Vamos a recibir una función 
    // que realiza una operación matemática como callback junto con dos números.
    //Devolver el callback pasándole como argumentos los números recibidos.
    //Tu código:


   return cb(n1,n2);
    
  }
     
 const multiplicar = (a,b)=>{
  
  console.log(a*b)
 }


  console.log(operacionMatematica(2,5,multiplicar))


  function procesarMensaje(mensaje, callback) {
    console.log("Mensaje recibido:", mensaje);
    callback(); // Se ejecuta la función callback
  }
  
  function mostrarConfirmacion() {
    console.log("Mensaje procesado con éxito.");
  }
  
  // Llamamos a la función y le pasamos otra función como callback
  procesarMensaje("Hola, esto es un callback", mostrarConfirmacion);


let numeros = [1,2,3,4,5];
  function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) 
    // de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada
    //Tu código:
     let totalResult=0;
    for (let i = 0; i < numeros.length; i++) {
      totalResult += numeros[i];
      
    }

    cb(totalResult);


  }

  console.log(sumarArray(numeros,function(resultado){
    console.log("la suma total es:",resultado)
  }))
  

  function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback
    //  uno por uno
    // Pista: Estarás invocando a `cb` varias veces 
    // (una por cada valor en la matriz)
    //Tu código:

   for (let i = 0; i < array.length; i++) {
     cb(array[i]);
    
   }  
   
   
  }

  forEach([1, 2, 3, 4], function(numero) {
    console.log("Número:", numero);
  });


  //*************      *MAP   ********************* */


  function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y
    //  luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento
    //Tu código:

    let newArray = [];

    for (let i = 0; i < array.length; i++) {
    
            newArray.push(cb(array[i]));
      
    }

    return newArray
  }



const resultado = map(numeros, function(num) {
  return num * 2;
});

console.log(resultado);


//*************************FILTER** */


function filter(array) {
  //Filtrar todos los elementos del array que comiencen con la letra "a".
  //Devolver un nuevo array con los elementos que cumplen la condición
  //Tu código:
  
  let newarray=[];

for (let i = 0; i < array.length; i++) {
    
  
    if(array[i][0]==="a") {
      newarray.push(array[i])
    }
  
    
}

return newarray;


}


console.log(filter(["arbol","coco","año","azno"]))