function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" 
    // y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y 
    // usa el valor definido en el argumento "edad"
    // Agrega un método (funcion) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:
  
     let gato = {
       
      nombre:nombre,
      edad:edad,
  
        meow: function(){
          
          return "Meow!";
        }
        }
  
        return gato;
     }
     
     // Llama a la función con los argumentos "Gato" y 3

     console.log(crearGato("gato",3))




     function agregarPropiedad(objeto, property) {
        // Agrega una propiedad al objeto (argumento "objeto") 
        // con el valor `null`
        // Devuelve el objeto
        // NOTA: El nombre de la propiedad no es "propiedad", 
        // el nombre es el valor del argumento llamado "property" (una cadena/string)
        // Tu código:
      
         objeto[property] = null;
         return objeto;
      
      }

      let miobjecto = {nombre:"juan"};

      console.log(agregarPropiedad(miobjecto,"color"))



      function invocarMetodo(objeto, metodo) {
        // "metodo" es una cadena que contiene 
        // el nombre de un método (funcion) en el objeto
        // Invoca ese método
        // Nada necesita ser devuelto ("returned")
        // Tu código:
      
        objeto[metodo]();
      }

      const miObjeto = {
        saludar: function() {
            console.log("¡Hola, mundo!");
        }
    };

      console.log(invocarMetodo(miObjeto,"saludar"))


      function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
        // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
        // Multiplica el numeroMisterioso por 5 y devuelve el producto
        // Tu código:
      
        return objetoMisterioso["numeroMisterioso"]*5;
        
      
      }


      let objetoMisterioso = {
        numeroMisterioso: 10
    };

      console.log(multiplicarNumeroDesconocidoPorCinco(objetoMisterioso))
      

      function eliminarPropiedad(objeto, unaPropiedad) {
        // Elimina la propiedad de objeto cuyo nombre está pasado por el parametro unaPropiedad 
        // tip: tenes que usar bracket notation
        // Devuelve el objeto
        // Tu código:

        delete objeto[unaPropiedad]
        return objeto;
      }



      function nuevoUsuario(nombre, email, password) {
        // Crea un nuevo objeto con las propiedades
        //  coincidiendo con los argumentos que se pasan a la función
        // Devuelve el objeto
        // Tu código:
      
        let user = {
          nombre,
          email,
          password
        }
      
        return user;
      
      }


      console.log(nuevoUsuario("Juan", "juan@example.com" ,"123456"))


      function tieneEmail(usuario) {
        // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
        // De lo contratio, devuelve "false"
        // Tu código:

        return (usuario["email"])?true:false;
        
      }


      let usuario = {
        nombre: "Juan",
        password: "123456",
        key:"123",
        amigos:["juan", "ana"]

      }
      console.log(tieneEmail(usuario))
      

      
function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto (parámetro "objeto")
    //  tiene una propiedad (key) cuyo nombre es igual al valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:

    return objeto.hasOwnProperty(propiedad);
  }

  console.log(tienePropiedad(usuario,"nombre"))


  function verificarPassword(usuario, password) {
    // Comprueba si la "password" enviada coincide con la propiedad "password" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:

    return (usuario["password"]===password)?true:false
  }


  console.log(verificarPassword(usuario,"123456"))


  function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
    // Devuelve el objeto
    // Tu código:

    usuario["password"]=nuevaPassword;
    return usuario;
  }


  console.log(actualizarPassword(usuario,"aws"))



  function agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    
    
    usuario["amigos"].push(nuevoAmigo);
    return usuario;



  }

  console.log(agregarAmigo(usuario,"jhenny"))



  let usuarios = [{nombre:"juan",
    esPremium:false,
    posts: [
        { id: 1, titulo: "Post 1", likes: 10 },
        { id: 2, titulo: "Post 2", likes: 5 },
        { id: 3, titulo: "Post 3", likes: 7 }
    ]
  },
{
    nombre:"luis",
    esPremium:false,
    posts: [
        { id: 1, titulo: "Post 1", likes: 1340 },
        { id: 2, titulo: "Post 2", likes: 55 },
        { id: 3, titulo: "Post 3", likes: 75 }
    ]
}

  ]


function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un array de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Define cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:


    for (let i = 0; i < usuarios.length; i++) {
         usuarios[i]["esPremium"]=true
        
    }

    return usuarios;
  }

  console.log(pasarUsuarioAPremium(usuarios))


  let usuarioslike = [{nombre:"juan",
    esPremium:false,
    posts: [
        { id: 1, titulo: "Post 1", likes: 10 },
        { id: 2, titulo: "Post 2", likes: 5 },
        { id: 3, titulo: "Post 3", likes: 7 }
    ]
  },
{
    nombre:"luis",
    esPremium:false,
    posts: [
        { id: 1, titulo: "Post 1", likes: 1340 },
        { id: 2, titulo: "Post 2", likes: 55 },
        { id: 3, titulo: "Post 3", likes: 75 }
    ]
}

  ]

  function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int/integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:
     
    return usuarios.map(usuario => {
        let totalLikes = usuario.posts.reduce((sum, post) => sum + post.likes, 0);
        return { nombre: usuario.nombre, totalLikes };
    });




  }


  console.log(sumarLikesDeUsuario(usuarioslike))


  function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" 
    // ("producto.precio" o "producto[precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento() -> 20 - (20 * 0.2)
    // Tu código:

    // Agregamos un método llamado "calcularPrecioDescuento" al objeto "producto"
    producto.calcularPrecioDescuento = function() {
      return this.precio - (this.precio * this.porcentajeDeDescuento);
  };

  // Devolvemos el objeto con el nuevo método agregado
  return producto;


  
  }
  