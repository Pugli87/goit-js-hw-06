#goit-js-hw-06
Tarea 6 js

Criterios de admisión
-   Se ha creado un repositorio goit-js-hw-06.
-   Al entregar las tareas, existen dos enlaces: a los archivos de origen y el trabajo en la página de GitHub Pages.
-   Las asignaciones se ajustan estrictamente a los términos de referencia (no se pueden hacer cambios en el HTML original de la asignación).
-   Al visitar la página de tareas en vivo, no hay errores ni advertencias en la consola.
-   Los nombres de las variables y las funciones son claros y descriptivos.
-   El código está formateado por Prettier.

Archivos de inicio
Descargue los archivos de inicio con un diseño preparado y con los archivos de script adjuntos para cada tarea. Cópielos en su proyecto.

Tarea 1
Existe una lista de categorías en el HTML ul#categories.

<ul id="categories">
  <li class="item">
    <h2>Animals</h2>
    <ul>
      <li>Cat</li>
      <li>Hamster</li>
      <li>Horse</li>
      <li>Parrot</li>
    </ul>
  </li>
  <li class="item">
    <h2>Products</h2>
    <ul>
      <li>Bread</li>
      <li>Prasley</li>
      <li>Cheese</li>
    </ul>
  </li>
  <li class="item">
    <h2>Technologies</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      <li>React</li>
      <li>Node.js</li>
    </ul>
  </li>
</ul>

Escriba un script que:

Cuente y muestre en la consola el número de categorías en ul#categories, es decir. los artículos li.item.
Para cada elemento li.item en la lista ul#categories, encuentre y envíe a la consola el texto del título del artículo (tag <h2>) y el número de artículos en la categoría (todo anidado <li>).
Como resultado, se mostrarán los siguientes mensajes en la consola.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5

Tarea 2
HTML tiene una lista vacía ul#ingredients.

<ul id="ingredients"></ul>

En JavaScript hay una array de secuencias.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Escriba un script que para cada elemento del array ingredients:

Cree un elemento separado <li>. Asegúrese de usar el método document.createElement().
Añada el nombre de un ingrediente como contenido de texto.
Añada una clase item al elemento.
Después, inserte todos los <li> en una sola operación en la lista ul#ingredients.
Tarea 3
Escriba un script para crear una galería de imágenes a partir de un array de datos. El HTML tiene una lista ul.gallery.

<ul class="gallery"></ul>

Use un array de objetos images para crear elementos <img> anidados dentro de <li>. Use las secuencias de plantillas y el método insertAdjacentHTML() para crear el marcado.

Todos los elementos de la galería deben añadirse al DOM en una sola operación de inserción.
Añada un diseño mínimo a la galería con flexboxes o Computación en malla mediante las clases CSS.
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

Tarea 4
El contador consta de un span y de botones que, al ser pulsados, deben aumentar y disminuir su valor en uno.

<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>

Cree una variable counterValue para almacenar el valor actual e inicializarlo con el valor 0.
Añada escuchas de clic a los botones, dentro de los cuales aumenta o disminuye el valor del contador.
Actualice la interfaz con el nuevo valor de la variable counterValue.
Tarea 5
Escriba un script que, cuando se escriba el texto en el input de input#nombre-input (evento input), sustituya su valor actual en span#name-output. Si el input está vacío, el span debería mostrar la secuencia "Anónimo".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>

Tarea 6
Escriba un script que, si se pierde el enfoque en un input (evento blur), el script comprobará el contenido del instupt para ver si el número de símbolos introducidos es correcto.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

El número de símbolos que debe tener un input se especifica en su atributo data-length.
Si se introduce el número correcto de símbolos, border del intuplet se convierte en verde, si no es correcto se vuelve rojo.
Para añadir estilos, use las clases CSS valid e invalid, que ya tenemos añadido a los archivos de origen del trabajo.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}

Tarea 7
Escriba un script que reaccione a un cambio en el valor de input#font-size-control. (evento input) y cambie el estilo inline de span#text actualizando el font-size. Por lo tanto, al arrastrar el deslizador cambiará el tamaño del texto.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>

Tarea 8
Escriba un script para controlar el formulario de acceso.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>

El procesamiento de form.login-form debe ser por el evento submit.
La página no debe recargarse cuando se envía el formulario.
Si hay espacios en blanco en el formulario, aparecerá alert con una advertencia diciendo que todos los espacios deben ser rellenados.
Si el usuario ha rellenado todos los espacios y ha enviado el formulario, reúne los valores de los espacios en donde el nombre del espacio es el nombre de la propiedad y el valor del espacio es la propiedad. Use la propiedad elements para acceder a los elementos del formulario.
Muestre el objeto con los datos introducidos en la consola y borre los valores de los camposespacio del formulario usando el método reset.
Tarea 9
Escriba un script que cambie el color de fondo del elemento <body> mediante el estilo inline cuando se hace clic en button.change-color y emite el valor del color en span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Use la función getRandomHexColor para generar un color aleatorio.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Tarea 10 (opcional)
Escriba un script para crear y borrar una colección de elementos. El usuario introduce el número de elementos en input y pulsa el botón Create, tras lo cual la colección se ha renderizado. Cuando el usuario hace clic en el botón Borrar, la colección de artículos ya se ha despejado.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Cree una función createBoxes(amount) que tome un parámetro, un número. La función crea tantos <div> como se especifique en amount y los añade a div#boxes.

El tamaño del primer <div> es de 30px por 30px.
Cada elemento después del primero, debe ser 10px más ancho y alto que el anterior.
Todos los elementos deben tener un color de fondo aleatorio en formato HEX. Use la función getRandomHexColor lista para obtener el color.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}



