var a = prompt("Nhập giá trị cho biến a: ");
if (!isNaN(a)) {
  if (Number.isInteger(parseFloat(a))) {
    console.log("Biến a có giá trị là dữ liệu kiểu số nguyên");
  } else {
    console.log("Biến a có giá trị là dữ liệu kiểu số thực");
  }
} else if (typeof a === 'string') {
  console.log("Biến a có giá trị là dữ liệu kiểu chuỗi");
} else if (typeof a === 'boolean') {
  console.log("Biến a có giá trị là dữ liệu kiểu Boolean");
} else {
  console.log("Biến a có giá trị là dữ liệu kiểu khác");
}