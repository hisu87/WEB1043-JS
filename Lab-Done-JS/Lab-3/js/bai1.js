var a = prompt("Nhập số a: ");
var b = prompt("Nhập số b: ");
var c = prompt("Nhập toán tử: ");
a = parseInt(a);
b = parseInt(b);


if (c == "+") {
    alert(a + b);
} else if (c == "-") {
    alert(a - b);
} else if (c == "*") {
    alert(a * b);
} else if (c == "/") {
    alert(a / b);
} else {
    alert("Nhập sai toán tử");
}