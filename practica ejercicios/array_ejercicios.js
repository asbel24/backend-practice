
const array = [2,3,4,5,6]
const numeros = [2,3,4,5,6]

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:

  return array.map((elemento)=> elemento+1)
}

console.log(incrementarPorUno(array));


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:

  array.push(elemento)
  return array;
}

console.log(agregarItemAlFinalDelArray(array,"hola ultimo"))


let palabras =  ['Hello', 'world!']

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:

 return palabras.join("  ")

  
}

console.log(dePalabrasAFrase(palabras))


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
return array.includes(elemento);

}

console.log(arrayContiene(array,1222))


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:

return  numeros.reduce(  (acum, numero)=> acum+numero)
  
}

console.log(agregarNumeros(numeros))


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  
  const totalnotas = resultadosTest.reduce( (acum,nota)=> acum+nota)

    const promedio =  (totalnotas/resultadosTest.length)

    return promedio;
}

console.log(promedioResultadosTest(numeros))

const arraynumeros = [2,3,4,5,26,19,34]

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  let masgrande = 0;
  
  for (let i = 0; i < numeros.length; i++) {

   if(numeros[i]>masgrande){
    masgrande=numeros[i]
   }
  
}

return masgrande;

}

console.log(numeroMasGrande(arraynumeros))


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de 
  // los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí

   const numeromayores = arreglo.filter(numero=>numero>18)
   return numeromayores.length;

}

console.log(cuentoElementos(arraynumeros))


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican 
  // como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana,
  //  retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y 
  // “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  
   

  if(numeroDeDia===1 || numeroDeDia===7){
    return "Es fin de semana"
  }
  else {
    return "es dia laboral" 
  }

  
} 

console.log(diaDeLaSemana(2));

function empienzaConNueve(n) {
//   //Desarrolle una función que recibe como parámetro un número entero n.
//   //  Debe retornar true si el entero 
//   //inicia con 9 y false en otro caso.
//   //Escribe tu código aquí
//   //  n=12121212
//   //n=9213212312

  // una forma 
  // let numero =  n.toString().split("")
  //   return numero[0]==="9"?true:false;

  // // otra forma 
  // let numero =  n.toString().split("")
  // return numero.some(num => num[0]=== "9"); // true
  
}


console.log(empienzaConNueve(92344))


arrayiguales = ["asds","asds","asds"]

// function todosIguales(arreglo) {
//   //Escriba la función todosIguales,
//   //  que indique si todos los elementos de un arreglo son iguales:
//   //retornar true, caso contrario retornar false.
//   //Escribe tu código aquí  

// return arreglo.every(val => val === arreglo[0]);
  
// } 

// console.log(todosIguales(arrayiguales))

function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados,
  //  recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: 
  // "No se encontraron los meses pedidos"
  // Tu código:

  let  mesesencontrados = []
 for (let i = 0; i < array.length; i++) {
  if(array[i]==="Enero" || array[i]==="Marzo" ||  array[i]==="Noviembre"){
    mesesencontrados.push(array[i])
  }
  
}

if(mesesencontrados.length===3){
  return mesesencontrados
}
else {
  return "No se encontraron los meses pedidos"
}

}

console.log(mesesDelAño(["Enero", "Marzo", "Noviembre"]))