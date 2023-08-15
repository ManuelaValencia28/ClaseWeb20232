

// funciones//

function restar(Num1, Num2)
{
    return Num1 - Num2;
}

console.log(restar(6,3))

// Anonymous Functions //

const SumarDosNumeros = function(Numero1,Numero2)
{
    return Numero1 + Numero2;
}

console.log(SumarDosNumeros(4,7))

//Arrow Functions//

/** recibe parametros
 *  @param {numero 1} n1
 *  @param {numero 2}n2
 * @returns
 */

const multplicarDosNumeros = (n1,n2) =>{
    return n1*n2;
}

console.log(multplicarDosNumeros(4,7))

// no recibe parametros//

const multiDos = () =>{
    return 1*0;
}

/**
 *  
 * @param {numero a multplicar} n1
 */

const multiTres = n1 =>{
    return n1*10;
}

/**
 * se realiza de inmediato la operacion, no se incluye el return. 
 * @param {numero 1} n1 
 * @param {numero 2} n2 
 * @returns 
 */
const multiCuatro = (n1,n2) => n1*n2;



// CALLBACK FUNCTION //

/**
 * 
 * @param {numero uno} NumberOne
 * @param {numero 2} NumberTwo
 * @param {la funcion que recibe, lo que hara, llamada callback function} operacion
 */

const operacionesMatematicas = (NumberOne, NumberTwo, operacion) =>
{
    return operacion(NumberOne,NumberTwo);
}

console.log(operacionesMatematicas(2,5,multiCuatro));


//ARREGLOS //

let userData = ['Juan', 1234,'@gmail.com'];

const userDataTwo = [{name:'Juan', pass:1234, mail:'@gmail.com'}];


/**
 * 
 * Length.  Longitud (cantidad de datos)
 * 
 * index   Posicion en el arreglo
 * 
 * push.   Ingresar un dato (al final)
 * 
 * pop.    Sacar el ultimo dato
 */

// hacer dos funciones tipo flecha, luego un callback function, usando los items anteriores// 


// 1. Ejercicio practico con funcion tipo flecha y contiene vector y push //

let CrearVector = [];

const LlenarVectorNumerosPares = (CrearVector) =>
{
    for(i=2; i <= 20; i +=2)
    {
    CrearVector.push(i);
    }
    return CrearVector;
}
console.log(LlenarVectorNumerosPares(CrearVector));



// 2. Función flecha que toma dos parámetros y no utiliza return//
// 3. Funcion flecha como callback para mostrar el resultado

const nums = [10, 15, 20, 25, 30, 35, 40, 45, 50];
const BuscarNumero = 25;

const EncontrarElementoBuscado = (vector, NumeroBuscado, callback) => {
  for (let i = 0; i < vector.length; i++) {
    if (vector[i] === NumeroBuscado) {
      callback(NumeroBuscado, i);
      break;
    }
  }
};

const MostrarResultadoCallback = (element, position) => {
  console.log(`Resultado del callback: Se encontró el número ${element} en la posición ${position}.`);
};

EncontrarElementoBuscado(nums, BuscarNumero, MostrarResultadoCallback);
