/**
* Tạo ra một số ngẫu nhiên giữa 0 và numDigits - 1. hữu ích để tạo ra các số ngẫu nhiên nằm trong
* 
* @param numDigits - Số chữ số trong số
* 
* @return { số } Số ngẫu nhiên giữa 0 và num
*/
function randomNumber(numDigits) {
    var min = Math.pow(10, numDigits - 1);
    var max = Math.pow(10, numDigits) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  setInterval(function() {
    var randomNum = randomNumber(5);
    console.log(randomNum);
    alert(randomNum);
  }, 5000);