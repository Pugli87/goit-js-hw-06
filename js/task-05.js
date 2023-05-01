const Input = document.querySelector(`#name-input`);
const Output = document.querySelector('#name-output');

Input.addEventListener('input', function() {
  if (Input.value.trim() !== '') {
    // se utiliza la function trim() para suprimir los espacios al inicio y al final 
    Output.textContent = Input.value;
  } else {
    Output.textContent = 'Anonimo';
  }
});