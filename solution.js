// ==============================
// ✅ IF-ELSE PRACTICE PROGRAMS
// ==============================

// Import prompt-sync for Node.js input
const prompt = require("prompt-sync")();

// -----------------------------------------
// 1. Check if a number is positive, negative, or zero
// -----------------------------------------
let number = prompt("Enter a number: ");

if (number > 0) {
  console.log("The number is positive.");
} else if (number < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

// -----------------------------------------
// 2. Check if a person is eligible to vote (age ≥ 18)
// -----------------------------------------
let age = prompt("\nEnter your age: ");

if (age >= 18) {
  console.log("You are eligible to vote.");
} else {
  console.log("You are not eligible to vote.");
}

// -----------------------------------------
// 3. Check whether a given number is even or odd
// -----------------------------------------
let num = prompt("\nEnter a number: ");

if (num % 2 === 0) {
  console.log("The number is even.");
} else {
  console.log("The number is odd.");
}
// let pak
// {
//   let a;
// }
// -----------------------------------------
// 4. Check if a given character is a vowel or consonant
// -----------------------------------------
let char = prompt("\nEnter a single character: ").toLowerCase();

if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {
  console.log("The character is a vowel.");
} else if (char >= 'a' && char <= 'z') {
  console.log("The character is a consonant.");
} else {
  console.log("Invalid input (please enter an alphabet).");
}

// -----------------------------------------
// 5. Check whether a number is divisible by 5 and 11
// -----------------------------------------
let numberCheck = prompt("\nEnter a number: ");

if (numberCheck % 5 === 0 && numberCheck % 11 === 0) {
  console.log("The number is divisible by both 5 and 11.");
} else {
  console.log("The number is not divisible by both 5 and 11.");
}

// -----------------------------------------
// 6. Find the largest of two numbers
// -----------------------------------------
let a = prompt("\nEnter first number: ");
let b = prompt("Enter second number: ");

if (a > b) {
  console.log("The largest number is " + a);
} else if (b > a) {
  console.log("The largest number is " + b);
} else {
  console.log("Both numbers are equal.");
}

// -----------------------------------------
// 7. Find the largest of three numbers
// -----------------------------------------
let x = prompt("\nEnter first number: ");
let y = prompt("Enter second number: ");
let z = prompt("Enter third number: ");

if (x >= y && x >= z) {
  console.log("The largest number is " + x);
} else if (y >= x && y >= z) {
  console.log("The largest number is " + y);
} else {
  console.log("The largest number is " + z);
}

// -----------------------------------------
// 8. Check whether a year is a leap year or not
// -----------------------------------------
let year = prompt("\nEnter a year: ");

if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year.");
} else {
  console.log(year + " is not a leap year.");
}

// -----------------------------------------
// 9. Check whether a number is within the range 10–50
// -----------------------------------------
let n = prompt("\nEnter a number: ");

if (n >= 10 && n <= 50) {
  console.log("The number is within the range 10–50.");
} else {
  console.log("The number is outside the range 10–50.");
}

// -----------------------------------------
// 10. Grade the student based on marks
// -----------------------------------------
let marks = prompt("\nEnter your marks: ");

if (marks >= 90) {
  console.log("Excellent");
} else if (marks >= 75) {
  console.log("Good");
} else if (marks >= 50) {
  console.log("Average");
} else {
  console.log("Fail");
}

// -----------------------------------------
// 11. Check if a given password matches a stored password
// -----------------------------------------
let storedPassword = "MySecret123";
let enteredPassword = prompt("\nEnter your password: ");

if (enteredPassword === storedPassword) {
  console.log("Password matched!");
} else {
  console.log("Incorrect password.");
}

// -----------------------------------------
// 12. Check username and password for login
// -----------------------------------------
let correctUsername = "admin";
let correctPassword = "12345";

let username = prompt("\nEnter username: ");
let password = prompt("Enter password: ");

if (username === correctUsername && password === correctPassword) {
  console.log("Login successful!");
} else {
  console.log("Invalid username or password.");
}

// -----------------------------------------
// 13. Check type of triangle (equilateral, isosceles, or scalene)
// -----------------------------------------
let side1 = prompt("\nEnter side 1: ");
let side2 = prompt("Enter side 2: ");
let side3 = prompt("Enter side 3: ");

if (side1 === side2 && side2 === side3) {
  console.log("The triangle is Equilateral.");
} else if (side1 === side2 || side2 === side3 || side1 === side3) {
  console.log("The triangle is Isosceles.");
} else {
  console.log("The triangle is Scalene.");
}

// -----------------------------------------
// 14. Print day name based on day number (1–7)
// -----------------------------------------
let dayNumber = prompt("\nEnter day number (1–7): ");

if (dayNumber == 1) {
  console.log("Sunday");
} else if (dayNumber == 2) {
  console.log("Monday");
} else if (dayNumber == 3) {
  console.log("Tuesday");
} else if (dayNumber == 4) {
  console.log("Wednesday");
} else if (dayNumber == 5) {
  console.log("Thursday");
} else if (dayNumber == 6) {
  console.log("Friday");
} else if (dayNumber == 7) {
  console.log("Saturday");
} else {
  console.log("Invalid day number!");
}

// -----------------------------------------
// 15. Check whether a character is a number, uppercase, lowercase, or special character
// -----------------------------------------
let ch = prompt("\nEnter a single character: ");

if (ch >= 'A' && ch <= 'Z') {
  console.log("Uppercase letter");
} else if (ch >= 'a' && ch <= 'z') {
  console.log("Lowercase letter");
} else if (ch >= '0' && ch <= '9') {
  console.log("Number");
} else {
  console.log("Special character");
}
