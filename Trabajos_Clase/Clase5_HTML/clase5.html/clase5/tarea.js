const suma = (a,b) =>{
    return a + b;     
 }
 suma(18,4);
 
 
 const sonIguales = (x, y)=>{
    return x === y; 
 }
 (sonIguales(5,5));
 (sonIguales('True','False')); 
 
 function tienenMismaLongitud(str1, str2){
   return str1.length === str2.length;
 }
 
 (tienenMismaLongitud('Manuela', 'Manuela')); 
 (tienenMismaLongitud('ABC', 'ABC145')); 
 
 function esPositivo(numero) {
     if(numero > 0){
       return("Es positivo");
     }
     else if(numero < 0){
       return("Es negativo");
     }
     else {
       return false;
     }
 }
   (esPositivo(5)); 
   (esPositivo(-3));
   (esPositivo(0)); 
     
   const colors = (color)=>{
     switch(color)
     {
       case "blue":
         return `This is ${color}`;
       case "red": 
         return `This is ${color}`;
       case "green":
         return `This is ${color}`;
       case "orange":
         return `This is ${color}`;
       default:
         return "Color not found";
     }
   }
   (colors("blue")); 
   (colors("red"));
   (colors("green"));
   (colors("orange"));
   (colors("pink"));
   
   const fizzBuzz = (numero) => {
     if (numero % 3 === 0 && numero % 5 === 0) {
       return "fizzbuzz";
     } else if (numero % 3 === 0) {
       return "fizz";
     } else if (numero % 5 === 0) {
       return "buzz";
     } else {
       return numero;
     }
   }
   (fizzBuzz(15)); //Devuelve Fizz
   (fizzBuzz(20)); //Devuelve Buzz
   (fizzBuzz(9)); //Devuelve FizzBuzz
   (fizzBuzz(7)); //Devuelve el numero
 
   const devolverPrimerElemento = (array) => {
     return array[0];
   }
   const Myarray = [10,7,9,20,15];
   (devolverPrimerElemento(Myarray));
 
   const agregarItemAlFinalDelArray = (array, elemento) =>{
 
     array.push(elemento);
     return array;
   }
   const MyArray = [10,7,8,20,15];
   const NuevoElemento = 25;
   (agregarItemAlFinalDelArray(MyArray,NuevoElemento));
 
   const nuevoUsuario = (nombre, email, password) => {
 
     const usuario = {
            nombre : nombre,
            email : email,
            password : password
     };
     return usuario;
   }
   const UsuarioNuevo = nuevoUsuario("Juan Jimenez", "juan@correo.com", "clave1225");
   (UsuarioNuevo);
 
   const verificarPassword = (usuario, password) => {
 
     return usuario.password === password;
   }
       const usuario = {
        nombre: "Juan Jimenez",
        email: "juan@correo.com",
        password: "clave1225"
    }; 
   (verificarPassword(usuario, "clave1225")); //Devolvera true
   (verificarPassword(usuario, "contraseña12")); //Devolvera false
 
   const actualizarPassword =(usuario, nuevaPassword) => {
 
     usuario.password = nuevaPassword;
     return usuario;
   }
   const Usuario = {
     nombre: "Juan Jimenez",
     email: "juan@correo.com",
     password: "clave1225"
   }
    const nuevaPassword = "NuevaClave963";
    const Actualizado = actualizarPassword(usuario, nuevaPassword);
    (Actualizado);
 
   const agregarAmigo = (usuario, nuevoAmigo) => {
     usuario.amigos.push(nuevoAmigo);
     return usuario;
   }
   const usuarioo = {
     nombre: "Juan Jimenez",
     email: "juan@correo.com",
     password: "clave1225",
     amigos: ["Cristian","Santiago"]
   }
   const nuevoAmigo = "Diego";
   const UsuarioAmigoNuevo = agregarAmigo(usuarioo, nuevoAmigo);
   (UsuarioAmigoNuevo);
 
 const pasarUsuarioAPremium = usuarios => {
 
     for (let i = 0; i < usuarios.length; i++) {
         usuarios[i].esPremium = true;
     }
     return usuarios;
 }
 
 const listaUsuarios = [
     { nombre: "Juan", esPremium: false },
     { nombre: "María", esPremium: false },
     { nombre: "Carlos", esPremium: false }
 ];
 
 const usuariosPremium = pasarUsuarioAPremium(listaUsuarios);
 (usuariosPremium);
 
   
 
 const sumarLikesDeUsuario = usuario => {
 
   let totalLikes = 0;
   for (let i = 0; i < usuario.posts.length; i++) {
       totalLikes += usuario.posts[i].likes;
   }
   return totalLikes;
 }
 
 const usuaario = {
   nombre: "Juan",
   posts: [
       { contenido: "Mi nombre es Juan", likes: 10 },
       { contenido: "Amo la programacion", likes: 25 },
       { contenido: "Comida deliciosa", likes: 15 }
   ]
 };
 
 (sumarLikesDeUsuario(usuaario)); // Devolverá 50
 
 
 class Persona {
     constructor(nombre, apellido, edad, domicilio) {
       this.nombre = nombre;
       this.apellido = apellido;
       this.edad = edad;
       this.domicilio = domicilio;
 
     }
     Detalle(){
         return{
         Nombre: this.nombre,
         Apellido: this.apellido,
         Edad: this.edad,
         Domicilio: this.domicilio
        }
     };
 }
 const persona = new Persona("Juan","Perez", 22,"Saavedra 123");
 (persona.Detalle());
 
 const crearInstanciaPersona = (nombre, apellido, edad, dir)=>{
 
     const nuevaPersona = new Persona(nombre, apellido, edad, dir);
     return nuevaPersona;
 }
 const nuevaPersonaCreada = crearInstanciaPersona("María", "González", 28, "Calle 456");
 (nuevaPersonaCreada.Detalle());
 
 const sumarArray = (numeros, cb) =>{
 
     let suma = 0;
     for (let i = 0; i < numeros.length; i++) {
         suma += numeros[i];
     }
     cb(suma);
 }
 
 const copiarEach = (array, cb) =>{
 
     for (let i = 0; i < array.length; i++) 
     {
       cb(array[i]);
     }
   }
 
   const operacionMatematica =(n1, n2, cb) =>{
 
     return cb(n1, n2);
 
   }
   const Suma = (a, b) => a + b;
   ((operacionMatematica(8,4, Suma)));
 
   function filter(array) {
     //Filtrar todos los elementos del array que comiencen con la letra "a".
     //Devolver un nuevo array con los elementos que cumplen la condición
     //Tu código:
     const newArray = array.filter(elemento => elemento.match(/^[a]/));
     return newArray;
   } 
   const palabras = ['arandano', 'banana', 'uva', 'aguacate', 'naranja'];
   const palabrasFiltradas = filter(palabras);
   (palabrasFiltradas);
 
 
   /**
  * Por favor no borrar el código que hay de aquí en adelante.
  * Este código sirve para ejecutar las pruebas de la solución hallada para cada
  * una de las funciones creadas.
  */
 module.exports = {
     suma,
     sonIguales,
     tienenMismaLongitud,
     esPositivo,
     colors,
     fizzBuzz,
     devolverPrimerElemento,
     agregarItemAlFinalDelArray,
     nuevoUsuario,
     verificarPassword,
     actualizarPassword,
     agregarAmigo,
     pasarUsuarioAPremium,
     sumarLikesDeUsuario,
     Persona,
     crearInstanciaPersona,
     sumarArray,
     copiarEach,
     operacionMatematica,
     filter
 }
 
 