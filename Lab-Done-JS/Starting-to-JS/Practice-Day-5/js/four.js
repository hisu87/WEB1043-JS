//Using while loop
var sum = 0; //initialize sum variable
var i = 1; //initialize counter variable
while (i <= 50) { //loop condition
  if (i % 2 == 1) { //check if i is odd
    sum += i; //add i to sum
  }
  i++; //increment counter
}
console.log(sum); //display result

//Using do while loop
var sum = 0; //initialize sum variable
var i = 1; //initialize counter variable
do {
  if (i % 2 == 1) { //check if i is odd
    sum += i; //add i to sum
  }
  i++; //increment counter
} while (i <= 50); //loop condition
console.log(sum); //display result

//Using for loop
var sum = 0; //initialize sum variable
for (var i = 1; i <= 50; i++) { //loop initialization, condition, and increment
  if (i % 2 == 1) { //check if i is odd
    sum += i; //add i to sum
  }
}
console.log(sum); //display result