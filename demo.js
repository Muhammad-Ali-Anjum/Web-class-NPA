const prompt = require("prompt-sync")();
// -----------------------------------------
// 1. Check if a number is positive, negative, or zero
// -----------------------------------------
// let number = prompt("Enter a number: ");
let number =-5;

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}