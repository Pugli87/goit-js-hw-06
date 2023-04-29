// obtener elementos del DOM
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById('value');

// inicializar el contador en 0
let counterValue = 0;

// función para actualizar el valor del contador y la interfaz
function updateCounterValue(newValue) {
  counterValue = newValue;
  counterValueElement.textContent = counterValue;
}

// agregar escuchadores de clic para los botones
decrementButton.addEventListener('click', () => {
  updateCounterValue(counterValue - 1);
});

incrementButton.addEventListener('click', () => {
  updateCounterValue(counterValue + 1);
});
