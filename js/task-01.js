
// Obtener la lista ul#categories
const categoriesList = document.querySelector('#categories');

// Obtener todos los elementos li.item de la lista
const categoriesItems = categoriesList.querySelectorAll('.item');

// Contar el número de elementos li.item en la lista
const categoriesCount = categoriesItems.length;

// Mostrar el número de categorías en la consola
console.log(`Number of categories: ${categoriesCount}`);

// Iterar sobre cada elemento li.item de la lista
categoriesItems.forEach((category) => {
  // Obtener el título de la categoría
  const categoryName = category.querySelector('h2').textContent;

  // Obtener todos los elementos li de la categoría
  const categoryElements = category.querySelectorAll('li');

  // Contar el número de elementos li en la categoría
  const categoryElementsCount = categoryElements.length;

  // Mostrar el título y el número de elementos de la categoría en la consola
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElementsCount}`);
});