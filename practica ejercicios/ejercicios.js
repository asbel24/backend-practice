
// const holamundo =()=> {
//    return console.log("hola mundo");
// }

// console.log(holamundo());



// //======================0


// const age=(number)=>{
    
//     return (2025-number)
// }

// console.log(age(1991));

// //*************************

// const suma = (num1,num2)=>{
//     return num1+num2;
// }

// console.log(suma(2,70));


// //******************

// const EsPar=(number)=> {
//     if(number%2==0) return "ES par";
//     else  return "Es impar";
// }

// console.log(EsPar(3));

// //===========================

// // const tablamultiplicar(number)=> {

// //       return constconst holamundo = () => {
// //   console.log("hola mundo");
// // }

// // holamundo();

// //======================0



// const calculateAge = (birthYear) => {
//   return 2025 - birthYear;
// }

// console.log(calculateAge(1991));

// //*************************

// const sumNumbers = (num1, num2) => {
//   return num1 + num2;
// }

// console.log(sumNumbers(2, 70));

// //******************

// const isEven = (number) => {
//   return number % 2 === 0 ? "ES par" : "Es impar";
// }

// console.log(isEven(3));

// //===========================

// const multiplicationTable = (number) => {
//   for (let i = 1; i <= 10; i++) {
//     console.log(`${number} x ${i} = ${number * i}`);
//   }
// }

// multiplicationTable(5)

// //========================


// // function fizzBuzz(n) {


// //   for(let i=1; i<=n;i++){

// // if(i%3===0 && i%5===0) {
// //   console.log("FizzBuzz")
// // }  else if(i%3===0){
// //   console.log("Fizz")
// // } else if(i%5===0){
// //   console.log("Buzz")
 
// // }  else {
// //   console.log(i)
// // } 
  
// // }

// //   }
  

// // console.log(fizzBuzz(15))



function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
  }
}

fizzBuzz(15);


function esPalindromo(palabra) {
  
let variable = "";

const palabraseparada = palabra.split("");

for(let i= palabraseparada.length -1 ; i>=0 ;i--){
      
   variable += palabraseparada[i];
}

if(palabra===variable){
 return "es Palindromo";

}  else{
  return "No es palindromo"
}

}

console.log(esPalindromo("radar"));

//=====================================
//Escribe una función que reciba un array de números y devuelva el número más grande.

function maximoEnArray(arr) {   //  arra = [1,2,3,4,5]

  let mayor= arr[0];
  
for(let i=1;i< arr.length;i ++){
  if (mayor<arr[i]) {
    mayor=arr[i];
  }

}

return  mayor;

}
console.log(maximoEnArray([3, 8, 2, 10, 5]));


//=====================================


//Escribe una función que reciba un número n y 
// calcule la suma de todos los números desde 1 hasta n.


function sumaHastaN(n) {

   let sumatotal =0;

   while (n>0) {
    sumatotal= sumatotal + n;
    n = n - 1;
   }
   return sumatotal;
}

console.log(sumaHastaN(5));


///=============================================


//Crea una función que reciba un número y devuelva la tabla de multiplicar
//  del 1 al 10 como un array.

function tablaMultiplicar(num) {

  let nuevoarray = [];


  for (let i = 1; i <= 10; i++) {
      
    nuevoarray.push(num*i);
    
  }

  return nuevoarray;
    
}
console.log(tablaMultiplicar(3)); 

// [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]


//==========================


//Crea una función que reciba una cadena y devuelva la misma cadena,
//  pero al revés.

function revertirCadena(cadena) {
    
  let alreves ="";

  let separarcadena = cadena.split("");

for (let i = separarcadena.length - 1; i >=0; i--) {
  alreves += separarcadena[i];
  
}

return alreves;


}
console.log(revertirCadena("javascript")); 

// "tpircsavaj"


//============================


//Escribe una función que reciba un array y devuelva otro 
// array sin elementos duplicados.


function eliminarDuplicados(arr) {

  nuevoarray = [];

  for (let i = 0; i < arr.length; i++) {
    
    if(arr[i]!==arr[i+1]){
      nuevoarray.push(arr[i]);
    }
  }function esPalindromo(palabra) {
  let variable = palabra.split("").reverse().join("");
  return palabra === variable ? "es Palindromo" : "No es palindromo";
}

  return nuevoarray;
   
}
console.log(eliminarDuplicados([1, 2, 2, 3, 4, 4, 5])); 

// [1, 2, 3, 4, 5]

//============================================0

//Escribe una función que reciba una cadena y devuelva la 
// cantidad de vocales que contiene.

function contarVocales(cadena) {
    // Tu lógica aquí

    let cantidadVocal=0;
    let vocales="";

    let separar = cadena.split("");

    for (let i = 0; i < separar.length; i++) {
     if(separar[i]==="a" ||separar[i]==="e"     ||    separar[i]==="i" || separar[i]==="o" || separar[i]==="u" ){
      cantidadVocal++;
      vocales = vocales + separar[i] + " ";
     }
      
      

    }

    return cantidadVocal + ( " ") + (" ") + vocales;
}
console.log(contarVocales("javascript")); 

// 3 (a, i, a)


//==========================


//Escribe una función que calcule el factorial de un número.


// function factorial(num) {
  
//   for (let i = 0; i < array.length; i++) {
    
    
//   }

// }
// console.log(factorial(5)); 

//120 (5*4*3*2*1)

//=========================0000


//Ordenar un array de números
//Escribe una función que ordene un array de números en orden ascendente.


function ordenarArray(arr) {

  let nuevoarray= [];

  for (let i = 0; i < arr.length; i++) {
       
    for (let j = 0; j < arr.length; j++) {
      
      if(arr[i]<arr[j+1]){
         nuevoarray.push(arr[i]);
      } else {
        nuevoarray.push(arr[j+1]);
      }
    }
    
  }

  return nuevoarray;
}


console.log(ordenarArray([5, 3, 8, 1, 2])); 

// [1, 2, 3, 5, 8]