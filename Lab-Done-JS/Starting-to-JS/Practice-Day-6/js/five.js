var arr = [];
var n = parseInt(prompt("Nhập số phần tử của mảng: "));
for (var i = 0; i < n; i++) {
  var element = parseInt(prompt("Nếu không muốn nhập nữa hãy nhập 0 Nhập một phần tử: "));
  if (element === 0) {
    break;
  }
  arr.push(element);
}
console.log(arr);