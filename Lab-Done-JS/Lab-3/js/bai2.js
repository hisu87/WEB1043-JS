var n = prompt("Nhập số cần in bảng cửu chương: ");
// Tạo hàm để in ra bảng cửu chương của một số
n = parseInt(n);
function bangCuuChuong(n) {
    // Sử dụng vòng lặp for để lặp qua các số từ 1 đến 9
    for (var i = 1; i <= 10; i++) {
      // In ra kết quả của phép nhân n * i
      console.log(n + " x " + i + " = " + n * i);
      document.write(n + " x " + i + " = " + n * i + "<br>");
    }
  }
  bangCuuChuong(n);