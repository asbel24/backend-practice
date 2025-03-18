
const nums = [1, 2, 3];

// forEarch


forEach
//Itera cada elemento del array sin retornar un valor.

nums.forEach(num => console.log(num));

//map

const dobles = nums.map(num => num * 2); // [2, 4, 6]

//filter  me devuelve un arreglo con la condicion [2,4,6]

const pares = nums.filter(num => num % 2 === 0); // [2]

//reduce


const suma = nums.reduce((ac, num) => ac + num, 0); // 6



//find me devuelve los numeros 3,5,.. que cumplen la condicion

const mayorQueDos = nums.find(num => num > 2); // 3

// findIndex

const index = nums.findIndex(num => num === 2); // 1


// some  (alguno cumple)

console.log(nums.some(num => num > 2)); // true

//every (todo debe cumplir )
console.log(nums.every(num => num > 0)); // true

// tambien se pued usar para 
// arrayiguales = ["asds","asds","asds"]
// ===================================

nums.unshift(0); // [0,1,2,3]
nums.shift();    // Elimina el 0

//slice ((extrae una parte sin modificar el original).)
const subArray = nums.slice(1, 3); // extrae elementos de índice 1 hasta 2
console.log(subArray); // [1, 2]

// Elimina 1 elemento en el índice 1 y añade "nuevo"
nums.splice(1, 1, "nuevo"); 
console.log(nums); // [0, "nuevo", 2, 3]


const letras = ['c', 'a', 'b'];
letras.sort(); // ['a', 'b', 'c']
// Para números:
nums.sort((a, b) => a - b);

//join

const str = nums.join(", "); // "1, nuevo, 3"
console.log(str);

//****************************METODOS DE STRING*************** */

//split 


const palabras = "hola mundo".split(" "); // ["hola", "mundo"]



const saludo = "Hola Mundo";
console.log(saludo.substring(0, 4)); // "Hola"
console.log(saludo.slice(5));         // "Mundo"

console.log(saludo.includes("Hola")); // true

const nuevoSaludo = saludo.replace("Mundo", "JS"); // "Hola JS"

console.log(saludo.toUpperCase()); // "HOLA MUNDO"


const limpio = "  hola  ".trim(); // "hola"


//*****************************METODOS CON OBJETOS** */



const persona = { nombre: "Ana", edad: 25 };
console.log(Object.keys(persona)); // ["nombre", "edad"]



console.log(Object.values(persona)); // ["Ana", 25]

console.log(Object.entries(persona)); // [["nombre", "Ana"], ["edad", 25]]


const clon = { ...persona };
const combinado2 = { ...persona, ciudad: "Madrid" };
console.log(combinado2)



//agregar propiedad      objeto[property] = null;

// invocar metodo        objeto[metodo]();


// accder a akl propiedad   objetoMisterioso["numeroMisterioso"]

// eliminar una prpiedad   delete objeto[unaPropiedad]


//verifica si la propiedad existe  objeto.hasOwnProperty(propiedad);



//****************************METODO MATH ********/


const aleatorio = Math.random();
Math.floor()

// Redondea hacia abajo.


console.log(Math.floor(4.7)); // 4
Math.ceil()

// Redondea hacia arriba.


console.log(Math.ceil(4.1)); // 5
Math.round();
// Redondea al entero más cercano.


console.log(Math.round(4.5)); // 5
Math.max();
Math.min();
// Devuelven el valor máximo y mínimo respectivamente.


console.log(Math.max(1, 3, 2)); // 3
console.log(Math.min(1, 3, 2)); // 1

//******************    CONVERTIR ******+ */

// de nuemro a string  =    let numero =  n.toString()

// de string a array   n.toString().split("")

