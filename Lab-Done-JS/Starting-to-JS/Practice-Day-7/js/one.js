/**
* Xét kết quả của một hoạt động toán học. Nó được sử dụng để tính toán tổng trừ nhân và chia hai số
* 
* @param a - Số đầu tiên được vận hành
* @param operator - Người vận hành được sử dụng cho hoạt động.
* @param b - Số thứ hai để điều trị.
* 
* @return { số } Kết quả của hoạt động như một
*/
function calculator(a, operator, b) {
    let result;
    // Trả lại kết quả của người vận hành.
    if (operator === "+") {
      result = a + b;
    // Trả lại kết quả của người vận hành.
    } else if (operator === "-") {
      result = a - b;
    // Trả lại kết quả của người vận hành.
    } else if (operator === "*") {
      result = a * b;
    // nếu người vận hành là / thì kết quả là kết quả của hoạt động.
    } else if (operator === "/") {
      result = a / b;
    }
    return result;
  }
  let a = prompt("Nhập số thứ nhất");
  let operator = prompt("Nhập phép tính");
  let b = prompt("Nhập số thứ hai");
  let result = calculator(a, operator, b);
  console.log(result);
  alert(result);
