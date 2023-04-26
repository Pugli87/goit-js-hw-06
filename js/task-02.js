const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ul = document.querySelector('#ingredients');
// ciclo para insertar cada ingrediente dentro de la lista
ingredients.forEach((ingredient) => {
  //creamos y asignamos un ingrediente a la lista
  const li = document.createElement('li');
  // asignamos el texto al ingrediente 
  li.textContent = ingredient;
  // le asignamos la clase correspodiente al elemento de la lista
  li.classList.add('item');
  //incorporamos el elemento  al final del html
  ul.append(li);
});