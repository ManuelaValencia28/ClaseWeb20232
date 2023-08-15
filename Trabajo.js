
// 1. Prueba del Console.log//
console.log('Hola, Mi Nombre es Manuela Valencia');

// 2. String.Lenght//
let message = 'Manuela Valencia';
console.log(message.length);


 //3. Arithmetic Operators//

 let N1 = 4, N2 = 2;

 console.log('- La suma de los numeros es: ' + (N1 + N2));
 console.log('- La Resta de los numeros es: ' + (N1 - N2));
 console.log('- La Multiplicacion de los numeros es: ' + (N1 * N2));
 console.log('- La Division de los numeros es: ' + (N1 / N2));

 let moduloN1 = N1 % N2;
 let moduloN2 = N2 % N1;
 console.log('- El modulo de los numeros es: ' + (moduloN1));
 console.log('- El modulo de los numeros es: ' + (moduloN2));


// 4. condicionales If y else//

let edad = 25;

if(edad >= 18)
{
    console.log("Puede ingresar");
}
else
{
    console.log("Acceso denegado");
}


// 5. Logical Operator  &&

let semestre = 4;
const Carrera = 'Software';

if(semestre == 4 && Carrera == 'Software')
{
    console.log("Puede cursar esta materia")
}
else
{
    console.log("No tienes creditos suficientes para cursar la materia")
}

// 6. Logical Operator || y FOR 

let i;

for(i=0; i<=20; i++)
{
    if((i % 2==0) || (i % 3 == 0))
    {
        console.log(i);
        console.log();
    }
}

// 7. switch Statement
const opcion = 1;

switch (opcion) {
  case 1:
    console.log('El paciente le corresponde habitacion personal');
    break;
  case 2:
    console.log('El paciente le corresponde habitacion bipersonal');
    break;
  default:
    console.log('verifique en taquilla para mayor informacion');
}

// 8. Comparison Operators y Else if clause

let temperatura = 25;

if(temperatura < 10)
{
    console.log("TEMPERATURA BAJA");
}
else if((temperatura >= 10)&&(temperatura<=30))
{
    console.log("TEMPERATURA NORMAL")
}
else 
{
    console.log("TEMPERATURA ALTA");
}

//  9. FUNCTION

function verificarNumero(numero) 
{
    if (numero > 0) {
      return "El número es positivo";
    } else if (numero < 0) {
      return "El número es negativo";
    } else {
      return "El número es cero";
    }
  }
  
  console.log(verificarNumero(8)); 
  console.log(verificarNumero(-4)); 
  console.log(verificarNumero(0));  


// 10. Global Variables 

let saludoGlobal = "Hola";

function agregarNombreAlSaludo(nombre) {
  saludoGlobal += ", " + nombre;
}

agregarNombreAlSaludo("Profesor Nelson");
console.log(saludoGlobal); 


// 11. Arreglos 

const valores = [3, 7, 1, 9];
let suma = 0;

for (i = 0; i < valores.length; i++) 
{
  suma += valores[i];
}

console.log("La suma total es: " + suma);

// 12. Method .push()
const numerosPares = [];

for  (i = 2; i <= 16; i +=2) 
{
  numerosPares.push(i);
}

console.log(numerosPares); 

// 13. Method .pop()
const colores = ["rojo", "verde", "azul", "amarillo"];
const colorEliminado = colores.pop();

console.log("Último color eliminado:", colorEliminado);
console.log("Colores restantes:", colores);

// 14. Reverse Loop


const nume = [1, 2, 3, 4, 5];
let multiplicacion = 1;

for (i = nume.length - 1; i >= 0; i--) {
  multiplicacion *= nume[i];
}

console.log("La suma total es:", multiplicacion);


// 15. DO - WHILE - Sumar números hasta cierto límite. 

let suma = 0;
const limite = 50;
let numero = 1;

do {
  suma += numero;
  numero++;
} while (suma <= limite);

console.log("La suma total es:", suma);

// 16. Break Keyword
const nums = [10, 15, 20, 25, 30, 35, 40, 45,  50];
const elementoBuscado = 25;

for (i = 0; i < nums.length; i++) 
{
  if (nums[i] === elementoBuscado) 
  {
    console.log(`Se encontró ${elementoBuscado} en la posición ${i}.`);
    break;
  }
}


// 17. Nested For Loop

for (i = 1; i <= 2; i++) 
{
    for (let j = 1; j <= 10; j++) 
    {
      console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("------");
  }
  
// 18. Callback Functions
function operar(a, b, callback) 
{
    return callback(a, b);
}
  
  function suma(x, y) 
  {
    return x + y;
  }
  
  const resultado = operar(5, 3, suma);
  console.log("Resultado:", resultado); 


// 19. Foreach 

const num = [10, 20, 30, 40, 50];
let suma = 0;

numeros.forEach(function(num) 
{
  suma += num;
});

console.log("La suma total es:", suma);

// 20. The .map() Method

const palabras = ["Software", "JavaScript", "HTML"];
const longitudes = palabras.map(function(palabra) 
{
  return palabra.length;
});

console.log("Longitudes de palabras:", longitudes);


//  21. MATRICES 
const matrizA =[[1, 2],[3, 4]];
const matrizB = [[5, 6],[7, 8]];
  
  const sumaMatrices = [];
  
  for (i = 0; i < matrizA.length; i++) 
  {
    const filaSuma = [];
    for (j = 0; j < matrizA[i].length; j++) 
    {
      filaSuma.push(matrizA[i][j] + matrizB[i][j]);
    }
    sumaMatrices.push(filaSuma);
  }
  console.log(sumaMatrices);


// 22. The .filter() Method
  const numeros = [30, 55, 12, 75, 40, 90, 62];

const numerosMayores50 = numeros.filter(function(numero) 
{
  return numero > 50;
});

console.log("Números mayores que 50:", numerosMayores50);

 








