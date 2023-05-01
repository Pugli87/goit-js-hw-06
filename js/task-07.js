const control = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

control.addEventListener('input', () => {
  text.style.fontSize = `${control.value}px`;
  if (parseInt(control.value) <= 30 || parseInt(control.value) >= 60) {
    text.style.color = 'green';
  } else {
  text.style.color = 'initial';
  }
});