
/**
 * Foreach
 */

const numeros = [1, 5, 10, 30, 50];
let replica = 0;

numeros.forEach((item)=>{
    replica+=item;

})

console.log(replica);

/**
 * Map
 */
//Multiplica ´por dos cada valor del vector original, guardandolo en doble. 

const doble = numeros.map((valor)=> valor * 2);
console.log(doble);

/**
 * Vector de Objetos
 */

const estudiantes = [
    {Nombre:'Pedro', Apellido:'Perez'},
    {Nombre: 'Pablo', Apellido: 'Moncada'},
    {Nombre: 'Andres', Apellido: 'Montoya'}
];

const NombreCompleto = estudiantes.map((Student) =>
{
    return (Student.Nombre + " " + Student.Apellido);
})

console.log(NombreCompleto);

/**
 * Filter    filtrado y se pone la condicion
 */

const NumerosFiltrados = numeros.filter((numero) => numero<30);

console.log(NumerosFiltrados)

// Filter con Vector de objetos 

const ObjetoFiltrado = estudiantes.filter((estudiante) => estudiante.Nombre==='Pedro');

console.log(ObjetoFiltrado)


/**
 *Every
 */

 const frutas = ['Banano' , 'Papaya', 'Mango', 'Fresas'];

 const cumple = frutas.every((word) => word.length >3);

 console.log(cumple);

 //Every con objetos 

 const objetoFrut = [
    {Nombre:'Banano', Buena:true},
    {Nombre:'Papaya', Buena:false},
    {Nombre:'Mango', Buena:true},
    {Nombre:'Fresas', Buena:true},
 ];

 const EstadoFruta = objetoFrut.every((frut) => objetoFrut.Buena === true);
 console.log(EstadoFruta)


 /**
  * OBJETOS
  * 
  * Const = es para cantidad de propiedades fijas 
  */

 const auto ={
      color : 'Azul',
      year: 1982,
      cantPuertas: 4,
      marca: 'Mazda',

      Revisiones :{
        fechaIngreso: '10/Enero/2020',
        FechaSalida: '20/Enero/2020',
        EstadoSalida: 'Bueno',
        EntregadoPor: 'Juan Perez',
      },

      tieneSeguro: true,
      registradoTransito: true
 } ;

 let autos = [];
 autos.push(auto);

 console.log(autos);


 //CONSTRUIR UN ARRAY CON MINIMO 2 OBJETOS. 
 // CADA OBJETO DEBE TENER ADENTRO OTRO OBJETO.
 // USAR MINIMO 3 METODOS DE ARREGLOS, SOBRE EL ARREGLO QUE SE CONSTRUYE 


 const Spa = [
       {Cosmetologa:'Manuela', 
       Tiempo:'Completo',
       Clienta:{
        Nombre:'Viviana Gomez',
        Fecha:'Jueves 17/Agosto',
        Hora: '02:00 pm'
       }
       },
       {Cosmetologa:'Evelyn', 
       Tiempo: 'Medio tiempo',
        Clienta:{
        Nombre:'Luisa Restrepo',
        Fecha:'Jueves 17/Agosto',
        Hora: '4:00 pm'
       }
       },
 ]

 //METODO FILTER

const CosmetologaFiltrado = Spa.filter((Cosmetologa) => Cosmetologa.Tiempo==='Completo');
console.log(CosmetologaFiltrado);

//METODO MAP

const CitaClienta = Clienta.map((clientaa) =>
{
    return (clientaa.Nombre + " " + clientaa.Fecha);
})

console.log(CitaClienta);

 



