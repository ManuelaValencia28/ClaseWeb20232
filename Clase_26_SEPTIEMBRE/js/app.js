import { personas } from "./persona.js";
import { computersChoiceDisplay } from "./dom.js";


const sectionMain = document.createElement('div');
const parrafoPrincipal= document.createElement('p');
parrafoPrincipal.innerHTML = personas[0].PrimerNombre + ' ' + personas[0].Apellido;
sectionMain.classList.add("main");

document.body.appendChild(parrafoPrincipal);

const seccion =`
     <section class = "main">
     <p>Dentro de otro section</p>
     </section>
     `;

sectionMain.innerHTML = seccion;
document.body.appendChild(sectionMain);

//appenChild significa que agrega a el documento. 
//innerhtml, es el texto que va a ir. 
// division pagina, es una funcion tipo flecha