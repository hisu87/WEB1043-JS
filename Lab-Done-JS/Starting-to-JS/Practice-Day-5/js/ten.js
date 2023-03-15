// //khai báo biến table để lưu trữ mã HTML của bảng
// var table = "<table border='1'>";
// table += "<caption>Bảng cửu chương</caption>"; 

// //dùng vòng lặp for để duyệt qua các số từ 1 đến 10
// for (var i = 1; i <= 10; i++) {
//   //tạo một biến row để lưu trữ mã HTML của một hàng trong bảng
//   var row = "<tr>";
  
//   //dùng vòng lặp for lồng trong để duyệt qua các số từ 0 đến 9
//   for (var j = 1; j <=10; j++) {
//     //tạo một biến cell để lưu trữ mã HTML của một ô trong bảng
//     var cell = "<td>";
    
//     //tính kết quả của phép nhân giữa số ngoài và số trong và gán vào cell 
//     var result = i * j;
//     cell += i + "x" + j + "=" + result;
    
//     //nối cell vào row 
//     row += cell + "</td>";
    
//    }
   
//    //sau khi kết thúc vòng lặp for bên trong, nối row vào table 
//    table += row + "</tr>";
   
// }

// //sau khi kết thúc vòng lặp for bên ngoài, hiển thị table ra màn hình 
// table += "</table>";
// document.write(table);
//declare a function that takes a text parameter and returns a table cell with that text
// function createCell(text) {
//     return "<td>" + text + "</td>";
//   }

//   //declare a variable table to store the HTML code of the table
//   var table = "<table border='1'>";
//   table += "<caption>Bảng cửu chương</caption>"; 
  
//   //use for loops to iterate over numbers from 1 to 10
//   for (var i = 1; i <= 10; i++) {
//     //create a variable row to store the HTML code of one row in the table
//     var row = "<tr>";
    
//     //use another for loop inside to iterate over numbers from 0 to 9
//     for (var j = 1; j <=10; j++) {
//       //calculate the result of multiplying the outer and inner numbers and assign it to result 
//       var result = i * j;
      
//       //call the createCell function with the result as an argument and append it to row 
//       row += createCell(i + "x" + j + "=" + result);
      
//      }
     
//      //after finishing the inner for loop, append row to table 
//      table += row + "</tr>";
     
//   }
  
//   //after finishing the outer for loop, display table on the screen 
//   table += "</table>";
//   document.write(table);

//get the table element by its id
var table = document.getElementById("myTable");
    
// sử dụng vòng lặp for để lặp qua các số từ 1 đến 10
for (var i = 1; i <= 10; i++) {
  //create a new row at the end of the table
  var row = table.insertRow(-1);
  
  // sử dụng một vòng lặp for khác bên trong để lặp qua các số từ 0 đến 9
  for (var j = 1; j <=10; j++) {
    // tính toán kết quả của phép nhân các số bên ngoài và bên trong và gán nó cho kết quả
    var result = i * j;
    
    //tạo một ô mới ở cuối hàng với kết quả là nội dung văn bản của nó
    var cell = row.insertCell(-1);
    cell.textContent =+ " " + i + " " + "x" + " " + j + " " + "=" + " " + result;
    
   }
   
}