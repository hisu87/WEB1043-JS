//Tạo một mảng rỗng để chứa các số chẵn
var even = [];
//Tạo một mảng trống để lưu các số lẻ
var odd = [];

//Nhắc người dùng nhập số nguyên dương n
var n = prompt("Enter a positive integer");

//Chuyển chuỗi đầu vào thành số
n = Number(n);

//Kiểm tra giá trị nhập vào có hợp lệ không
if (isNaN(n) || n <= 0) {
  alert("Invalid input");
} else {
//Lặp từ 1 đến n
  for (var i = 1; i <= n; i++) 
    //Kiểm tra xem i chẵn hay lẻ và đẩy nó vào mảng tương ứng
    if (i % 2 == 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  //Display the result arrays
  alert("Even array: " + even);
  alert("Odd array: " + odd);
