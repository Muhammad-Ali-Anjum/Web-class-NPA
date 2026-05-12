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
// -----------------------------------------
// 2. Check if a person is eligible to vote
// -----------------------------------------
// let age = prompt("Enter your age: ");
let age = 18;

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}