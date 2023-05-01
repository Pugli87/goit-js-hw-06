
const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {

  event.preventDefault();

  const emailInput = loginForm.elements.email;
  const passwordInput = loginForm.elements.password;

  if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
    alert("Todos los espacios deben ser rellenados.");  
  }

  const object = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(object);
  loginForm.reset();
});