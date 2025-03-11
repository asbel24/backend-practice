//****************** */

const numeros = [1, 2, 3, 4, 5, 6];

//Dado un array de números, filtra los números pares, duplica cada 
// uno de ellos y, finalmente, calcula la suma total.|

const numPares = numeros.filter(num=>num%2===0)

console.log(numPares)
const numDuplicados = numPares.map(num=>num*2) 

console.log(numDuplicados)

const total  = numDuplicados.reduce( (ac , num) => ac+num)

console.log(total)

///*********** contador de palabras  ******** */

const palabra="hola me gusta jugar y me gusta cantar"

function contadorPalabras(palabra) {

    const separarTexto = palabra.split(" ")

    const contador = {};
    separarTexto.forEach(palabra => {
    contador[palabra] = (contador[palabra] || 0) + 1;
  });
  return contador;
}

console.log(contadorPalabras(palabra))



const picua=929;
function esPicua(n) {
  
let numero = n.toString().split( "");

let comparar=[]

for (let i = numero.length-1; i>=0   ; i--) {
  comparar.push(numero[i])
  
}

compararcadena = comparar.join()
numerocadena = numero.join()

if(numerocadena===compararcadena){
  return true
} else  {
  return false
}

}

console.log(esPicua(picua));


function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  // De lo contrario, devuelve "false"
  // Tu código:
  num>50?true:false


}

console.log(mayorQueCincuenta(34));