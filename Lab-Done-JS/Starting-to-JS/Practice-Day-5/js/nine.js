//declare variables
var num1 = 10; //first number
var num2 = 5; //second number
var num3 = 15; //third number
var num4 = 8; //fourth number
var num5 = 12; //fifth number

//initialize SLN and SBN variables with the first number
var SLN = num1;
var SBN = num1;

//compare each number with SLN and SBN and update them accordingly
if (num2 > SLN) {
  SLN = num2;
}
if (num2 < SBN) {
  SBN = num2;
}
if (num3 > SLN) {
  SLN = num3;
}
if (num3 < SBN) {
  SBN = num3;
}
if (num4 > SLN) {
  SLN = num4;
}
if (num4 < SBN) {
  SBN = num4;
}
if (num5 > SLN) {
  SLN = num5;
}
if (num5 < SBN) {
  SBN = num5;
}

//display result
console.log("The largest number is " + SLN);
console.log("The smallest number is " + SBN);