const sectionHeader = document.createElement('header');
const ParrafoPrincipal = document.createElement('h1');

const seccion = `
   <section class = "header">
   <h1>Envios Internacionales - Colombia</</h1>
   </section>
`;

sectionHeader.innerHTML = seccion;
document.body.appendChild(sectionHeader);

const sectionNav = document.createElement('nav');
const encabezados = document.createElement('a');
const imagen = document.createElement('img');

const container = `
    <nav class="container">
    <img  class="logo" src="logo-ritual-botanico.png">
    <a href="index.html"><h2>Tienda</h2></a>
    <a href="index.html"><h2>Modo de aplicación</h2></a>
    <a href="index.html"><h2>Preguntas frecuentes</h2></a>
    <a href="index.html"><h2>Blog</h2></a>
    <a class="icono" href="index.html"><img class="search"   src="Search.1.svg"></a>
    <a class="shopping" href="index.html"><img class="shopping" src="carro-de-la-compra.png"></a>
    </nav>
`;

sectionNav.innerHTML = container;
document.body.appendChild(sectionNav);

const sectionDivivion = document.createElement('section');
const sectionImagen = document.createElement('img');

const Division = `
  <section class="Division">
    <section class="imagen">
      <img class="Ritual" src="img_5432.jpeg">
    </section>

    <section class="Descripcion">
    <h1>KERATINA RITUAL</h1>
    <h1>BÓTANICA<sup class="tm">TM</sup> 1000 ml</h1>
    <h3 class="precio">$60.000,00 COP</h3>
    <p class="info">Impuesto incluido. Los gastos de envío se calculan en la pantalla de pago.</p><br>
    <p class="info2">Cantidad</p>
    <input type="cant" id="Cantidad" placeholder="0"><br>
    <button class="button1">Agregar al carrito</button><br>
    <button class="button2">Comprar Ahora</button>
   </section>
  </section>
`;

sectionDivivion.innerHTML = Division;
document.body.appendChild(sectionDivivion);
