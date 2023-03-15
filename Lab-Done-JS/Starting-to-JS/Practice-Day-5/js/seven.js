//Using while loop
var n = 5; //input number
var fact = 1; //initialize factorial variable
var i = 1; //initialize counter variable
while (i <= n) { //loop condition
  fact *= i; //multiply fact by i
  i++; //increment counter
}
console.log(fact); //display result

//Using do while loop
var n = 5; //input number
var fact = 1; //initialize factorial variable
var i = 1; //initialize counter variable
do {
  fact *= i; //multiply fact by i
  i++; //increment counter
} while (i <= n); //loop condition
console.log(fact); //display result

//Using for loop
var n = 5; //input number
var fact = 1; //initialize factorial variable
for (var i = 1; i <= n; i++) { //loop initialization, condition, and increment 
  fact *= i; //multiply fact by i 
}
console.log(fact); //display result
