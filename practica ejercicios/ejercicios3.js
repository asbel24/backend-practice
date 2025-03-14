function mayorQueCincuenta(num) {
    // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
    // De lo contrario, devuelve "false"
    // Tu código:


  return num>50?true:false
  
  
  }
  
  console.log(mayorQueCincuenta(34));


  function esPar(num) {
    // Devuelve "true" si "num" es par
    // De lo contrario, devuelve "false"
    // Tu código:
    
  return num%2===0?true:false;
   
  }

  console.log(esPar(7))

  //==================

  function espositvo(num) {
    return num>0 ? "Es postivo": num<0 ? "es Negativo" : "es Cero"

  }

  console.log(espositvo(2));
  console.log(espositvo(-2));
  console.log(espositvo(0));


  //==================


  function obtenerMayor(x, y) {
    // "x" e "y" son números enteros (int).
    // Devuelve el número más grande
    // Si son iguales, devuelve cualquiera de los dos
    // Tu código:
  
      return x>y?x:x<y?y:x;    
  
  }


  console.log(obtenerMayor(4,1))
  console.log(obtenerMayor(2,5))
  console.log(obtenerMayor(6,6))


  function mayoriaDeEdad(edad) {
    //Determinar si la persona según su edad puede ingresar a un evento.
    //Si tiene 18 años ó más, devolver --> "Allowed"
    //Si es menor, devolver --> "Not allowed"
  
    return edad>=18 ? "Allowed" :"Not allowed"
  }

  console.log(mayoriaDeEdad(17));
  
  function conection(status) {
    //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
    //Cuando el estado es igual a 1, el usuario está "Online"
    //Cuando el estado es igual a 2, el usuario está "Away"
    //De lo contrario, presumimos que el usuario está "Offline"
    //Devolver el estado de conexión de usuario en cada uno de los casos.
  
    return status===1?"online":status===2?"away":"offiline"
  }

  console.log(conection(1))
  console.log(conection(2))
  console.log(conection(404))


  function saludo(idioma) {
    // Devuelve un saludo en tres diferentes lenguajes:
    // Si "idioma" es "aleman", devuelve "Guten Tag!"
    // Si "idioma" es "mandarin", devuelve "Ni Hao!"
    // Si "idioma" es "ingles", devuelve "Hello!"
    // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
    // Tu código:
  
    if(idioma==="aleman") return "Guten tag"
    if(idioma==="mandarin") return "ni haog"
    if(idioma==="ingles") return "hello"
    return "hola"
  }

  
  console.log(saludo("aleman"))
  console.log(saludo("mandarin"))
  console.log(saludo("ingles"))
  console.log(saludo("español"))


  function esDiezOCinco(numero) {
    // Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
  
    return numero===10 ||numero===5?true:false
  }

  console.log(esDiezOCinco(10))
  console.log(esDiezOCinco(122))

  function esEntero(numero) {
    // Devuelve "true" si "numero" es un entero (int/integer)
    // Ejemplo: 0.8 -> false
    // Ejemplo: 1 -> true
    // Ejemplo: -10 -> true
    // De lo contrario, devuelve "false"
    // Pista: Puedes resolver esto usando `Math.floor`
    // Tu código:
  
    return  Math.floor(numero)===numero ?true:false
  }

  console.log(esEntero(10))
  console.log(esEntero(10.6))
  console.log(esEntero(-410))


  function fizzBuzz(numero) {
    // Si "numero" es divisible entre 3, devuelve "fizz"
    // Si "numero" es divisible entre 5, devuelve "buzz"
    // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
    // De lo contrario, devuelve el numero


    return numero%3===0 &&numero%5===0?"fizzbuzz":numero%3==0?"fizz":numero%5===0?"buzz":numero
  }

  console.log(fizzBuzz(3))
  console.log(fizzBuzz(5))
  console.log(fizzBuzz(15))
  console.log(fizzBuzz(2))




  function esPrimo(numero) {
    // Devuelve "true" si "numero" es primo
    // De lo contrario devuelve "falso"
    // Pista: un número primo solo es divisible por sí mismo y por 1
    // Pista 2: Puedes resolverlo usando un bucle `for`
    // Nota: Los números 0 y 1 NO son considerados números primos
    
    return numero%2===0?false:true;
    
  }

  
  console.log(esPrimo(151))
  console.log(esPrimo(157))
  console.log(esPrimo(163))
  console.log(esPrimo(167))



  function esVerdadero(valor){
    //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
    //si su valor es true y “Soy falso” si su valor es false.
    //Escribe tu código aquí:
  
    return valor===true?"soy verdadero":"soy falso";
  
  }

  console.log(esVerdadero(true))
  console.log(esVerdadero(false))
  
  function tablaDelSeis(){
    //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
    //Escribe tu código aquí 
  
    for(let i = 0 ;i<11;i++){
      console.log(`${6}x${i}=${i*6}`)
    }
  }

  console.log(tablaDelSeis())


  function tieneTresDigitos(numero){
    //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
    //Escribe tu código aquí
  
  
    return numero<=999 & numero >=100?true:false 
    
  }

  console.log(tieneTresDigitos(999))
  console.log(tieneTresDigitos(1000))
  console.log(tieneTresDigitos(99))
