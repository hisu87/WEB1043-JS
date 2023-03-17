var a = prompt("Nhập giá trị cho biến a: ");
if (!isNaN(a)) {
  if (Number.isInteger(parseFloat(a))) {
    alert("Biến a có giá trị là dữ liệu kiểu số nguyên");
  } else {
    alert("Biến a có giá trị là dữ liệu kiểu số thực");
  }
} else if (typeof a === 'string') {
  alert("Biến a có giá trị là dữ liệu kiểu chuỗi");
} else if (typeof a === 'boolean') {
  alert("Biến a có giá trị là dữ liệu kiểu Boolean");
} else {
  alert("Biến a có giá trị là dữ liệu kiểu khác");
}