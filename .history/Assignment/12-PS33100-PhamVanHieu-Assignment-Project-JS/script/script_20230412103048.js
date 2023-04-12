const registerButton = document.getElementById("register");
const loginButton = document.getElementById("login");
const container = document.getElementById("container");

registerButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

loginButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

function validateForm() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementsByClassName("email");
  const passwordInput = document.getElementsByClassName("password");
  console.log(nameInput.value);
  cl
  
  // Kiểm tra tên đầy đủ đã được nhập chưa
  if (nameInput.value === "") {
    alert("Vui lòng nhập tên của bạn.");
    return false;
  }
  
  // Kiểm tra email đã được nhập và đúng định dạng chưa
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Đây là regular expression để kiểm tra email
  if (emailInput.value === "") {
    alert("Vui lòng nhập email của bạn.");
    return false;
  } else if (!emailRegex.test(emailInput.value)) {
    alert("Email của bạn không đúng định dạng.");
    return false;
  }
  
  // Kiểm tra password có đủ độ dài chưa
  if (passwordInput.value.length < 6) {
    alert("Mật khẩu phải có ít nhất 6 ký tự.");
    return false;
  }
  return true;
  alert("Đăng ký thành công.");
}

function submit() {
  if (validateForm()) {
    // Nếu form hợp lệ thì gửi request đăng ký hoặc đăng nhập tới server.
    // Code ở đây...
    alert("Đăng ký thành công.");
  }
}

