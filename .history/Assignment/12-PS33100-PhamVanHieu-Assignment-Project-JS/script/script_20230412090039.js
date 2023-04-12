const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


function check(){
  // Get the input fields
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");



// Check if the username field is empty
if (usernameInput.value.trim() === null) {
  usernameError.innerText = "Username is required";
}

// Check if the email field is empty and if it is a valid email
if (emailInput.value.trim() === "") {
  emailError.innerText = "Email is required";
} else if (!isValidEmail(emailInput.value.trim())) {
  emailError.innerText = "Please enter a valid email";
}

// Check if the password field is empty and if it meets the minimum length requirement
if (passwordInput.value.trim() === "") {
  passwordError.innerText = "Password is required";
} else if (passwordInput.value.trim().length < 8) {
  passwordError.innerText = "Password must be at least 8 characters long";
}

// Check if the confirm password field is empty and if it matches the password field
if (confirmPasswordInput.value.trim() === "") {
  confirmPasswordError.innerText = "Please confirm your password";
} else if (confirmPasswordInput.value.trim() !== passwordInput.value.trim()) {
  confirmPasswordError.innerText = "Passwords do not match";
}

// Function to check if an email is valid
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
}