const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});
// Get the input fields
const usernameInput = document.getElementsByClassName("username");
const passwordInput = document.getElementsByClassName("password");

// Check if the input fields are empty when the register or login button is clicked
registerButton.addEventListener("click", () => {
  if (usernameInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields");
  } else {
    container.classList.add("right-panel-active");
  }
});

loginButton.addEventListener("click", () => {
  if (usernameInput.value === "" || passwordInput.value === "") {
    alert("Please fill in all fields");
  } else {
    container.classList.remove("right-panel-active");
  }
});