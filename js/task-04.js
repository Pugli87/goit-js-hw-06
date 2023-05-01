
function increment() {
  counterValue += 1;
  valueEl.textContent = counterValue;
}

function decrement() {
  counterValue -= 1;
  valueEl.textContent = counterValue;
}

let counterValue = 0;
const valueEl = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);
