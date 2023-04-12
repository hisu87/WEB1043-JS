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
  // Check if the user has entered data by getting the value of the input fields and checking if they are empty or not
const username = document.getElementById("email").value;
const password = document.getElementById("password").value;

if (username === "" || password === "") {
  // User has not entered data
  console.log("User has not entered data");
  alert("Vui lòng nhập email")
} else {
  // User has entered data
  console.log("User has entered data");
  alert("Vui lòng nhập password")
}
}

