//Nhắc người dùng nhập số nguyên dương n
var n = prompt("Enter a positive integer");

//Chuyển chuỗi đầu vào thành số
n = Number(n);
var arr = new Array(n);
for (var i = 0; i < n; i++) {
  arr[i] = i;
}
arr.sort(function(a, b) {
  return a - b;
});
console.log(arr); // Output: [1, 2, 3, 4, 5]

arr.sort(function(a, b) {
  return b - a;
});
console.log(arr); // Output: [5, 4, 3, 2, 1]