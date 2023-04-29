
// Obtener elementos del DOM
const valueEl = document.getElementById('value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

// Inicializar contador
let counterValue = 0;

// Funciones de incremento y decremento
function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

// Asignacion escuchas de clic a los botones
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
