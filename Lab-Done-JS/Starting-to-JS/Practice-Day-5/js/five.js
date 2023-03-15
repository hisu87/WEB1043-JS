//declare variables
var a = 2; //coefficient of x
var b = -4; //constant term

//check if a is zero
if (a == 0) {
  //check if b is also zero
  if (b == 0) {
    //the equation has infinitely many solutions
    console.log("The equation has infinitely many solutions.");
  } else {
    //the equation has no solution
    console.log("The equation has no solution.");
  }
} else {
  //calculate x by dividing -b by a
  var x = -b / a;
  //display the result
  console.log("The solution of the equation is x = " + x);
}