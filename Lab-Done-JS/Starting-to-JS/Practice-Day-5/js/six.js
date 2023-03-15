//declare variables
var a = 1; //coefficient of x^2
var b = -5; //coefficient of x
var c = 6; //constant term

//calculate discriminant
var d = b * b - 4 * a * c;

//check if discriminant is negative
if (d < 0) {
  //no real solution
  console.log("The equation has no real solution.");
} else if (d == 0) {
  //one real solution
  var x = -b / (2 * a);
  console.log("The equation has one real solution: x = " + x);
} else {
  //two real solutions
  var x1 = (-b - Math.sqrt(d)) / (2 * a);
  var x2 = (-b + Math.sqrt(d)) / (2 * a);
  console.log("The equation has two real solutions: x1 = " + x1 + " and x2 = " + x2);
}