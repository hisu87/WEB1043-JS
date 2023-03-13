

Bài 1
var a = prompt("Enter a:");
var b = prompt("Enter b:");

var c;
c = a**2 + b**2;

alert("c^2 = " +c);
console.log(c);


/*

Bài 2
var met_vuong = prompt("Nhập số mét vuông: ");
var km = met_vuong / 1000000;
var sao = met_vuong / 129.6;
var mau = met_vuong / 1296;
var ha = met_vuong / 10000;

Math.round(sao);
Math.round(mau);

alert(`Kết quả: ${km} km^2) (${sao}Sào) (${mau}Mẫu) (${ha}Hecta)`);ư

*/

/*
Bài 3

// Hàm tính chỉ số BMI
function calculateBMI(weight, height) {
    // Chuyển đổi chiều cao từ cm sang m
    height = height / 100;
    // Tính chỉ số BMI
    let bmi = weight / (height * height);
    // Trả về kết quả làm tròn đến hai chữ số thập phân
    return bmi.toFixed(2);
  }
  
  // Hàm đưa ra đánh giá dựa trên chỉ số BMI
  function evaluateBMI(bmi) {
    // Khai báo biến để lưu kết quả
    let result = "";
    // Sử dụng câu lệnh điều kiện để xét các trường hợp
    if (bmi < 18.5) {
      result = "Thiếu cân";
    } else if (bmi >= 18.5 && bmi < 25) {
      result = "Bình thường";
    } else if (bmi >= 25 && bmi < 30) {
      result = "Thừa cân";
    } else {
      result = "Béo phì";
    }
    
     // Trả về kết quả
     return result;
  }
  
  // Ví dụ sử dụng hàm tính và đánh giá chỉ số BMI
  
  // Khai báo biến để lưu khối lượng và chiều cao của người
  let weight = prompt("Nhập khối lượng của bạn (kg):");
  let height = prompt("Nhập chiều cao của bạn (cm):");
  
  // Gọi hàm tính chỉ số BMI và lưu vào biến bmi
  let bmi = calculateBMI(weight, height);
  
  // Gọi hàm đánh giá chỉ số BMI và lưu vào biến evaluation
  let evaluation = evaluateBMI(bmi);
  
  // Hiển thị kết quả ra màn hình
  alert("Chỉ số BMI của bạn là: " + bmi + "\nĐánh giá: " + evaluation);

*/

/*
Bài 4

// Cho mảng sau
const theList = ['Lauren', 'Kevin',true,35,null,undefined,['one', 'two']];

// Xoá phần tử đầu tiên và phần tử cuối cùng của mảng
theList.shift(); // xoá 'Lauren'
theList.pop(); // xoá ['one', 'two']

// Thêm 'FIRST' vào đầu mảng
theList.unshift('FIRST');

// Thêm 'hello world' vào vị trí thứ 4 của mảng
theList.splice(3, 0, 'hello world'); // chèn 'hello world' tại vị trí 3

// Thêm 'middle' vào vị trí thứ 3 của mảng
theList.splice(2, 0, 'middle'); // chèn 'middle' tại vị trí 2

// Thêm 'LAST' vào cuối mảng
theList.push('LAST');

// Xuất kết quả
console.log(theList); // ["FIRST", "Kevin", "middle", "hello world", true, 35, null, undefined, "LAST"]

*/

// Tạo biến x để lưu số bí mật
var x = 10 + Math.round(5 * Math.random());
// Tạo biến y để lưu số lần đoán
var y = 0;
// Tạo hàm kiểm tra số đoán
function checkGuess() {
    // Nhận và chuyển đổi số đoán từ người dùng
    var guess = prompt('Hãy nhập một số từ 10 đến 15');
    var num = parseInt(guess);
    // Kiểm tra các trường hợp khác nhau
    if (num === x) {
        // Nếu số đoán bằng số bí mật, thông báo chiến thắng và kết thúc trò chơi
        alert('Chúc mừng! Bạn đã đoán được sau ' + y + ' lần.');
        return true;
    } else if (num < x) {
        // Nếu số đoán nhỏ hơn số bí mật, thông báo cho người dùng biết và tăng biến y
        alert('Số bạn nhập quá nhỏ.');
        y++;
        return false;
    } else if (num > x) {
        // Nếu số đoán lớn hơn số bí mật, thông báo cho người dùng biết và tăng biến y
        alert('Số bạn nhập quá lớn.');
        y++;
    }
}