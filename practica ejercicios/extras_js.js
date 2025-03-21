let objeto=({
    D: 1,
    B: 2,
    C: 3
  }) 


function deObjetoAmatriz(objeto){
    // Escribe una función que convierta un objeto en una matriz, 
    // donde cada elemento representa 
    // un par clave-valor en forma de matriz.
    //Ejemplo: 
    /*objeto({
        D: 1,
        B: 2,
        C: 3
      }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
    //Escribe tu código aquí
  
       return Object.entries(objeto)
  
  }

  console.log(deObjetoAmatriz(objeto))



  function numberOfCharacters(string) {
    //La función recibe un string. Recorre el srting y 
    //  devuelve el caracter con el número de veces que aparece 
    //en formato par clave-valor.
    //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" ||
    //  Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
    //Escribe tu código aquí
            let frecuencia = {}
       // Recorremos el string
  for (let i = 0; i < string.length; i++) {
    let caracter = string[i];

    // Si el carácter ya existe en el objeto, aumentamos su valor
    // Si no, lo inicializamos con el valor 1
    if (frecuencia[caracter]) {
      frecuencia[caracter]++;
    } else {
      frecuencia[caracter] = 1;
    }

}


    return frecuencia;



  }
  
  let string = "asqqeqweasdadqweea"
  console.log(numberOfCharacters(string))