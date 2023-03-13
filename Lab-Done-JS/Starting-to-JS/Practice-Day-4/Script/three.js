let a = prompt("Nhập số thứ nhất: ");
let b = prompt("Nhập số thứ hai: ");

function sum(a, b) {
    return Number(a) + Number(b);
}
let tong = sum(a, b);
alert(`Tổng hai số ${a} + ${b} là: ${tong}`);


function sub(a, b) {
    return Number(a) - Number(b);
}
let hieu = sub(a, b);
alert(`Hiệu hai số ${a} - ${b} là: ${hieu}`);


function mul(a, b) {
    return Number(a) * Number(b);
}
let tich = mul(a, b);
alert(`Tích hai số ${a} * ${b} là: ${tich}`);


function div(a, b) {
    return Number(a) / Number(b);
}
let thuong = div(a, b);
alert(`Thương hai số ${a} / ${b} là: ${thuong}`);