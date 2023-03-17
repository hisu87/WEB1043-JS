let n = prompt("Nhập số phần tử của mảng: ");
let arr = new Array(n);
for (let i = 0; i < n; i++) {
  arr[i] = prompt("Nhập giá trị cho phần tử " + (i + 1) + " của mảng 1:");
}
console.log(arr);
document.write("Mảng có các phần tử: " + arr + "<br>");