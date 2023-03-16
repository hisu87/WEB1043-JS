//Nhắc người dùng nhập số nguyên dương n
var n = prompt("Enter a positive integer");

//Chuyển chuỗi đầu vào thành số
n = Number(n);
var arr = new Array(n);
for (var i = 0; i < n; i++) {
  arr[i] = i;
}
console.log(arr);