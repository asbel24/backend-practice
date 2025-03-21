function crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario",
    //  "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, 
    // el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" 
    // en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
  
    class Usuario {
        constructor(opciones) {
            this.usuario = opciones.usuario;
            this.nombre = opciones.nombre;
            this.email = opciones.email;
            this.password = opciones.password;
        }
            saludar() {
                return `Hola, mi nombre es ${this.nombre}`;
            }
        }

        return Usuario;



  }// Ejemplo de uso:
const Usuario = crearUsuario();
const usuario1 = new Usuario({
    usuario: "Juan123",
    nombre: "Juan",
    email: "juan@example.com",
    password: "12345"
});


console.log(usuario1.nombre)
console.log(usuario1.saludar())



function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:
  
    
      Constructor.prototype.saludar = function() {
        return "Hello World!";
      };
    }

    

    function agregarStringInvertida() {
        // Agrega un método al prototype de String que 
        // devuelva la misma cadena de caracteres, pero invertida.
        // El método debe llamarse "reverse"
        // Ej: 'menem'.reverse() => menem
        // 'toni'.reverse() => 'inot'
        // Pista: Necesitarás usar "this" dentro de "reverse"

   String.prototype.reverse= function () {
      return this.split("").reverse().join("");
   }

      }

      //caso de uso
agregarStringInvertida(); // Llamamos a la función para agregar el método

console.log("arepa".reverse()); // 
console.log("toni".reverse());  // 
console.log("venezuela".reverse()); // 