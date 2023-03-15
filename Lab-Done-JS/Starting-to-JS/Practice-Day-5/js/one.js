var $a = true; // change this value to test different cases

if (typeof $a === "number") {
  console.log("Variable $a has a value of number data type");
} else if (typeof $a === "string") {
  console.log("Variable $a has a value of string data type");
} else if (typeof $a === "boolean") {
  console.log("Variable $a has a value of boolean data type");
} else{
  console.log("Variable $a has a value of another data type");
}