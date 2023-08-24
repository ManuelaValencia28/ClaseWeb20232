//class padre
class Animal{
    constructor(Especie,color, sonido, habitat){
        this.Especie = Especie;
        this.color = color;
        this.sonido = sonido;
        this.habitat = habitat;
    }

    moverse(TipoMovimiento){
        console.log(`Mi movimiento es: ${TipoMovimiento}`);
    }

    determinarEspecie(){
        return this.Especie;
    }
    
    SonidoCaracteristico(){
        return this.sonido;
    }

    DondeSeEncuentra(){
        return this.habitat;
    }
}

class perro extends Animal{
constructor(raza, color, sonido){
    //this.raza = raza;
    //this.color = color;
    //this.sonido = sonido;
    super(raza, color, sonido, 'Casa');//inicializa el constructor del padre
}

ladrar()
{
    return this.sonido;
}

sentarse()
{
    console.log('Me he sentado');
}
}

const Labrador = new perro ('Labrador', 'Blanco', 'Woof');
Labrador.sentarse();
console.log(Labrador.SonidoCaracteristico());  //Regresa el console Woof



// Clase que reciben objetos 
// Clase padre

class Musica {
    constructor(info){
        this.fechalanzamiento = info.fechalanzamiento;
        this.Artista = info.Artista;
        this.Genero = info.Genero;
        this.Titulo = info.Titulo;
    }

    reproducir(){
        console.log(`se esta reproduciendo ${this.Titulo} del artista ${this.Artista}`);
    }
    
    pausar(){
        return `se ha pausado:  ${this.Titulo} del artista:  ${this.Artista}`;
    }
}
//Creo el objeto 

const informacion = {
    fechalanzamiento: 1989,
    Artista: 'Madona',
    Genero: 'pop',
    Titulo: 'Like a virgin',  
}


const pop = new Musica(informacion); //Creo una instancia 
pop.reproducir();

const PopUno = new Musica(
    {
        fechalanzamiento: 1984,
        Artista: 'Queen',
        Genero: 'Rock',
        Titulo: 'another one bites the dust', 
    }

);

PopUno.reproducir();

//Crear una clase Padre, Crear una clase que herede de la clase padre
//ambas clases deben tener minimo 2 metodos
//deben recibir objetos
//Los objetos recibidos deben tener otro objeto como propiedad
//MOSTRAR RESULTADOS


const info = {
    ID: '001',
    Fruta : 'Manzana',
    TipoFruta: 'Dulce',

    nutricion:{
        Calorias: '05 g',
    
    }
}

    class FRUTAS{
        constructor(info)
        {
            this.ID = info.ID;
            this.Fruta = info.Fruta;
            this.TipoFruta = info.TipoFruta;
            
        }

        Cosecha ()
        {
            return this.Fruta;
        }

     Fruta (CodigoFruta)
     {
         console.log(`El codigo de la Fruta es: ${CodigoFruta}`)
     }

 }


const Conservacion = {
 ModoReserva: 'Refrigeracion',
     TiempoReserva: '10 Dias',
}

class Conservado extends FRUTAS{
 constructor(Conservacion){
     super(info)
     this.ModoReserva = Conservacion.ModoReserva;
     this.TiempoReserva = Conservacion.TiempoReserva;
 }
     
 InformacionGeneral()
 {
     console.log(`La ${this.Fruta} Tiene una reserva de: ${this.ModoReserva}`)
 }

 Consumo()
 {
     console.log(`Tiene una reserva de: ${this.TiempoReserva}`)
 }
}

const MostrarFruta = new Conservado(Conservacion)
MostrarFruta.InformacionGeneral();