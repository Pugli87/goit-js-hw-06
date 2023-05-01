function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  const boxesDiv = document.getElementById('boxes');
  let size = 30 ;
  
  for (let i = 0; i < amount; i += 1) {
    const newBox = document.createElement('div');
    newBox.style.width = `${size}px`;
    newBox.style.height = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesDiv.appendChild(newBox);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesDiv = document.getElementById('boxes');
  boxesDiv.innerHTML = '';
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

createButton.addEventListener('click', () => {
  createBoxes(input.value);
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});
