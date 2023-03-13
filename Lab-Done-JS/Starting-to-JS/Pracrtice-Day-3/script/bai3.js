alert("Chào mừng đến với khóa học của Khày Hiếu Đẹp Trai")
alert("Để tham gia khóa học của Khầy, hãy để lại thông tin cho Khầy!!")
let name = prompt("Nhập tên đi pé:")
alert("Hãy đăng nhập bằng gmail đi bé " + name + "")
let email = prompt("Nhập email đi bé " + name + ":")
// Tạo hai phần tử span để chứa email và name
document.write("<span id='email'>" + email + "</span>")
document.write("<span id='name'>" + name + "</span>")
// Truy cập vào hai phần tử span bằng id
let emailElement = document.getElementById("email")
let nameElement = document.getElementById("name")
// Thay đổi màu của hai phần tử span thành xanh lá cây

alert("Pé " + name + " đã đăng nhập thành công với email " + email + "")
document.write("" + name + " đã đăng nhập thành công với email " + email + "")
d