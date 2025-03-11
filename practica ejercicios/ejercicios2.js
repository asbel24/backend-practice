

// Escribe una función que ordene un array de números en orden ascendente.
function ordenarArray(arr) {

    arr.sort((a, b) => a - b);

    return arr

}


function ordenarArrayMayorAmenor(arr){

    arr.sort((a,b)=>b-a)
    return arr;
}
  
  
  console.log(ordenarArray([5, 3, 8, 1, 2])); 

  console.log(ordenarArrayMayorAmenor([5, 3, 8, 1, 2])); 



//============ compara 2 array y dice cuando veces gana uno
// y cuantas gana el otro 

  const a = [5,6,7]
  const b=[3,6,10]

  function compareTriplets(a, b) {
    
    let contadorA = 0;
  let contadorB = 0;
  
  for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
          contadorA++;
      } else if (b[i] > a[i]) {
          contadorB++;
      }
      
      
      }
      
      return [contadorA,contadorB]
      
      
  }


  ///matricez


  const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(`Elemento en [${i}][${j}]: ${matriz[i][j]}`);
    }
}

