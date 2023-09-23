//Crear un elemento//
const usersChoice = document.createElement('h1');
const computersChoices = document.createElement('h1');
const resultDisplay = document.createElement('h1');

//Buscar un elemento que ya existe//
//Encontrando el section del HTML que tiene id = "root"//

const gameGrid = document.getElementById('root');
gameGrid.append(usersChoice);
gameGrid.append(computersChoices);
gameGrid.append(resultDisplay);

const choices = ['Piedra','Papel','Tijera'];
let UserChoise;
let ComputerChoice;

//creando Arrow Functions para generar aleatoriamente lo que el computador //
// va ha arrojar para el juego//

const generateComputerPlay = () => {
    const randomChoice = choices[Math.floor(Math.random()*choices.length)];
    ComputerChoice = randomChoice;
    computersChoices.innerHTML = 'La Jugada de la computadora es: ' + ComputerChoice;
}

const generateResult = () =>{
    switch(UserChoise + ComputerChoice){
        case 'TijeraPapel': 
        case 'PiedraTijera' :
        case 'PapelPiedra' :
            resultDisplay.innerHTML = 'Gano Usuario';
            break;

        case 'PiedraPapel': 
        case 'TijeraPiedra' :
        case 'PapelTijera' :
            resultDisplay.innerHTML = 'Perdio el usuario';
             break;

       default:
           resultDisplay.innerHTML = 'Es un empate';
           break;
    }
}

const handleClick = e => {
    UserChoise = e.target.id;
    usersChoice.innerHTML = 'Su Jugada es: ' + UserChoise;
    generateComputerPlay();
    generateResult();
}

for (let index = 0; index < choices.length; index++) {
//creando botones desde JS para HTML//
   const button = document.createElement('button');
   button.id = choices[index];
   button.innerHTML = choices[index];
   //cuando le hagan click, llamada a la funcion handleClick
   button.addEventListener('click', handleClick);
   gameGrid.appendChild(button);
}

