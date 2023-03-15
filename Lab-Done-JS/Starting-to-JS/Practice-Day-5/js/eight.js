//Using else if
var thang = "tháng mười hai"; //input month
var month; //output month
if (thang == "tháng một") {
  month = "January";
} else if (thang == "tháng hai") {
  month = "February";
} else if (thang == "tháng ba") {
  month = "March";
} else if (thang == "tháng tư") {
  month = "April";
} else if (thang == "tháng năm") {
  month = "May";
} else if (thang == "tháng sáu") {
  month = "June";
} else if (thang == "tháng bảy") {
  month = "July";
} else if (thang == "tháng tám") {
  month = "August";
} else if (thang == "tháng chín") {
  month = "September";
} else if (thang == "tháng mười") {
  month = "October";
} else if (thang == "tháng mười một") {
  month = "November";
} else if (thang == "tháng mười hai") {
  month = "December";
} else {
  console.log("Invalid input");
}
console.log(month); //display result

//Using switch case
var thang = 'Tháng Một'; //input month
var month; //output month
switch(thang) { 
   case 'Tháng Một': { 
      month= 'January'; 
      break; 
   } 
   case 'Tháng Hai': { 
      month= 'February'; 
      break; 
   } 
   case 'Tháng Ba': { 
      month= 'March'; 
      break; 
   }  
   case 'Tháng Tư': { 
      month= 'April'; 
      break; 
   }  
   case 'Tháng Năm': { 
      month= 'May';  
      break;    
   }  
   case 'Tháng Sáu': { 
      mont= 'June';  
      break;    
   }
    case 'Tháng Bảy': { 
       mont= 'July';  
       break;    
    }
    case 'Thánh Tám': { 
       mont= 'August';  
       break;    
    }
    case 'Thánh Chín': { 
       mont= 'September';  
       break;    
    }
    case'Thánh Mười':{
        mont='October';
        break;
    }
     case'Thánh Mười Một':{
        mont='November';
        break;
    }
     case'Thánh Mười Hai':{
        mont='December';
        break;
    }}