

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