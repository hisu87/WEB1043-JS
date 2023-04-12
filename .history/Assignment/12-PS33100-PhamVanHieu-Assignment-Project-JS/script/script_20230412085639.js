const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});


// Get the form element
const form = document.getElementById("form");

// Add event listener to the form on submit
form.addEventListener("submit", (event) => {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the input values
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Validate the input values
  if (username === "" || email === "" || password === "") {
    alert("Please fill in all fields");
    return;
  }

  // If all input values are valid, submit the form
  form.submit();
  
});