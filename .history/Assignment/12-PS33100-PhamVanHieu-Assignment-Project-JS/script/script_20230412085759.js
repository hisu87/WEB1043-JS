const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


// Get the login form and its input fields
const loginForm = document.getElementById("login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");

// Add event listener to the login form on submit
loginForm.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of the input fields
  const usernameValue = usernameInput.value.trim();
  const passwordValue = passwordInput.value.trim();

  // Check if the input fields are not empty
  if (usernameValue === "" || passwordValue === "") {
    alert("Please fill in all fields");
    return;
  }

  // Perform login validation here
  // ...
});