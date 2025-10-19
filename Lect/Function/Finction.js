// ======================================================
// 📚 JAVASCRIPT ARROW FUNCTIONS — FULL DETAILED LECTURE
// ======================================================

// 🧩 1. Introduction
// Arrow functions were introduced in ES6 (2015).
// They provide a shorter syntax to write functions.
// Syntax: const functionName = (parameters) => expression;

console.log("===== 1. BASIC EXAMPLES =====");

// Example 1 — Traditional vs Arrow
function traditional() {
  console.log("Hello from traditional function!");
}
traditional();

// Arrow version
const arrow = () => console.log("Hello from arrow function!");
arrow();

// Example 2 — Single parameter (no need for parentheses)
const square = n => n * n;
console.log("Square of 5:", square(5));

// Example 3 — Multiple parameters
const add = (a, b) => a + b;
console.log("Add(3, 7):", add(3, 7));

// Example 4 — Returning an object (use parentheses)
const createUser = (name, age) => ({ name, age });
console.log("User:", createUser("Ali", 22));

// Example 5 — Implicit return
const greet = name => `Hello, ${name}!`;
console.log(greet("Anjum"));

// Example 6 — Default parameter
const power = (base, exp = 2) => base ** exp;
console.log("Power(3,4):", power(3, 4));
console.log("Square(5):", power(5));

// Example 7 — Conditional inside arrow
const checkEven = num => num % 2 === 0 ? "Even" : "Odd";
console.log("5 is:", checkEven(5));


// ⚙️ 2. Intermediate Usage
console.log("\n===== 2. INTERMEDIATE USAGE =====");

// Example 8 — Arrow in array methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// Example 9 — Filtering
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// Example 10 — Reducing
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// Example 11 — Arrow in setTimeout
setTimeout(() => console.log("Executed after 2 seconds ⏱️"), 2000);

// Example 12 — Arrow returning a function
const multiplier = m => n => n * m;
const double = multiplier(2);
console.log("Double(10):", double(10));

// Example 13 — Arrow inside object (note “this” behavior)
const person = {
  name: "Saira",
  normalFunc: function() {
    console.log("Normal:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // undefined (arrow functions don’t bind their own this)
  }
};
person.normalFunc();
person.arrowFunc();


// 🧱 3. Data Structures with Arrow Functions
console.log("\n===== 3. DATA STRUCTURE EXAMPLES =====");

// Example 14 — Arrays and map/filter/reduce
const arr = [10, 20, 30, 40, 50];
const result = arr.filter(x => x > 25).map(x => x / 10);
console.log("Result:", result);

// Example 15 — Objects
const student = { name: "Akhtar", marks: 88, city: "Skardu" };
Object.entries(student).forEach(([key, value]) => console.log(`${key}: ${value}`));

// Example 16 — Map
const users = new Map();
users.set(1, "Ali");
users.set(2, "Anjum");
users.forEach((v, k) => console.log(`ID: ${k}, Name: ${v}`));

// Example 17 — Set
const set = new Set([1, 2, 2, 3, 4]);
set.forEach(v => console.log("Set Value:", v));

// Example 18 — Frequency Counter
const words = ["js", "python", "js", "c++"];
const freq = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log("Frequency:", freq);

// Example 19 — Sorting objects with arrow
const items = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 300 },
];
items.sort((a, b) => a.price - b.price);
console.log("Sorted Items:", items);


// 🧠 4. Advanced Concepts
console.log("\n===== 4. ADVANCED CONCEPTS =====");

// Example 20 — Currying
const addThree = a => b => c => a + b + c;
console.log("Curried Add:", addThree(2)(3)(4));

// Example 21 — Composition
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const doubleNum = x => x * 2;
const combined = compose(doubleNum, addOne);
console.log("Compose(5):", combined(5));

// Example 22 — Arrow + Promises
const promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Promise Resolved ✅") : reject("Promise Failed ❌");
});
promise.then(msg => console.log(msg)).catch(err => console.log(err));

// Example 23 — Arrow + Async/Await
const fetchData = async () => "Fetched Data Successfully 📦";
fetchData().then(res => console.log(res));

// Example 24 — Closures
const counter = (() => {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count
  };
})();
console.log("Counter++:", counter.inc());
console.log("Counter--:", counter.dec());

// Example 25 — Factorial recursion
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log("Factorial(5):", factorial(5));

// Example 26 — Matrix Sum
const matrixSum = mat => mat.flat().reduce((a, b) => a + b);
console.log("Matrix Sum:", matrixSum([[1, 2], [3, 4]]));

// Example 27 — Unique values from array
const unique = arr => [...new Set(arr)];
console.log("Unique:", unique([1, 1, 2, 3, 3, 4]));

// Example 28 — Arrow with optional chaining
const getCity = user => user?.address?.city || "Unknown";
console.log("City:", getCity({ address: { city: "Skardu" } }));

// Example 29 — Arrow with destructuring and default
const displayUser = ({ name = "Unknown", age = 0 }) => `${name} (${age})`;
console.log(displayUser({ name: "Ali", age: 25 }));
console.log(displayUser({}));

// Example 30 — Chaining methods
const chain = arr => arr.filter(x => x > 2).map(x => x * 2).reduce((a, b) => a + b);
console.log("Chained Result:", chain([1, 2, 3, 4, 5]));


// 🔬 5. Deep Understanding of “this”
console.log("\n===== 5. UNDERSTANDING 'this' =====");

// In normal functions, “this” refers to the caller object.
// In arrow functions, “this” is inherited from the parent scope.

const obj = {
  name: "Anjum",
  normal: function() {
    console.log("Normal this:", this.name);
  },
  arrow: () => console.log("Arrow this:", this.name)
};
obj.normal(); // ✅ Works
obj.arrow();  // ❌ Undefined


// 💻 6. Practice Questions (40+ Mini Examples)
console.log("\n===== 6. PRACTICE QUESTIONS =====");

const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => b !== 0 ? a / b : "Division by zero";
const isPositive = n => n > 0;
const toUpper = str => str.toUpperCase();
const sumArray = arr => arr.reduce((a, b) => a + b, 0);
const findMax = arr => Math.max(...arr);
const countVowels = str => str.match(/[aeiou]/gi)?.length || 0;
const reverse = str => str.split("").reverse().join("");
const factorial2 = n => n <= 1 ? 1 : n * factorial2(n - 1);

console.log("Multiply:", multiply(3, 4));
console.log("Subtract:", subtract(10, 3));
console.log("Divide:", divide(8, 2));
console.log("Is Positive:", isPositive(-5));
console.log("Uppercase:", toUpper("arrow"));
console.log("Sum Array:", sumArray([1, 2, 3, 4]));
console.log("Max:", findMax([3, 7, 2]));
console.log("Vowels:", countVowels("JavaScript"));
console.log("Reverse:", reverse("Arrow"));
console.log("Factorial:", factorial2(6));


// ✅ Summary
console.log(`
====================================================
🎯 SUMMARY:
- Shorter syntax using => 
- Implicit returns save time
- No own 'this' or 'arguments'
- Great for callbacks and short logic
- Avoid for object methods needing 'this'
====================================================
`);
