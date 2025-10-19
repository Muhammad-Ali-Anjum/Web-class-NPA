// JavaScript Arrow Functions — Detailed Professional Guide
// Author: Muhammad Ali Anjum
// Arrow functions were introduced in ES6 (2015) as a cleaner,
// more modern way to write functions. They are concise,
// automatically bind `this` lexically, and encourage functional programming.

// Example 1: Basic arrow function (no parameters)
const sayHello = () => console.log("👋 Hello, Developer!");
sayHello();
// Logical note: Parentheses are required even if there are no parameters.

// Example 2: Arrow function with one parameter
const square = num => num * num;
console.log("Square:", square(5));
// Logical note: When there's a single argument, parentheses are optional.

// Example 3: Multiple parameters
const add = (a, b) => a + b;
console.log("Sum:", add(10, 15));
// Logical note: Multiple parameters always require parentheses.

// Example 4: Explicit vs implicit return
const multiply = (a, b) => a * b; // implicit return
const divide = (a, b) => { return a / b; }; // explicit return
console.log("Multiply:", multiply(4, 6), "Divide:", divide(12, 3));
// Logical note: Curly braces `{}` turn the body into a block; use `return` explicitly.

// Example 5: Returning an object
const makeUser = (name, age) => ({ name, age });
console.log(makeUser("Ali", 22));
// Logical note: Parentheses are required around object literals to avoid ambiguity.

// Example 6: Arrow functions in array methods (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log("Doubled:", doubled, "Evens:", evens, "Total:", total);
// Logical note: Arrow functions are ideal for concise callback syntax.

// Example 7: Working with objects and data arrays
const students = [
  { name: "Ali", marks: 85 },
  { name: "Saira", marks: 92 },
  { name: "Akhtar", marks: 78 },
];
const topStudents = students.filter(s => s.marks > 80);
const studentNames = students.map(s => s.name);
console.log("Top Students:", topStudents);
console.log("Names:", studentNames);
// Logical note: Arrow functions simplify logic-heavy array operations.

// Example 8: Behavior of `this` in arrow functions
const person = {
  name: "Anjum",
  greet: () => console.log(`Hello ${this.name}`), // ❌ `this` not bound
  properGreet() { console.log(`Hello ${this.name}`); } // ✅ works fine
};
person.greet();
person.properGreet();
// Logical note: Arrow functions inherit `this` from the outer lexical scope,
// making them unsuitable for methods that rely on their own `this`.

// Example 9: Higher-order function using arrow functions
const operate = (a, b, operation) => operation(a, b);
console.log("Add:", operate(5, 3, (x, y) => x + y));
console.log("Multiply:", operate(5, 3, (x, y) => x * y));
// Logical note: Arrow functions can be passed as arguments to create flexible logic.

// Example 10: setTimeout with arrow function
setTimeout(() => console.log("⏳ Executes after delay"), 1000);
// Logical note: Arrow functions prevent issues with `this` inside callbacks.

// Example 11: Using arrow functions with Promises
const fetchData = () => new Promise(resolve => {
  setTimeout(() => resolve("✅ Data fetched successfully"), 1000);
});
fetchData().then(msg => console.log(msg));
// Logical note: Perfect for async callbacks and cleaner promise chains.

// Example 12: Using arrow functions with Map and Set
const userMap = new Map([["name", "Ali"], ["role", "Developer"]]);
userMap.forEach((value, key) => console.log(`${key}: ${value}`));
const idSet = new Set([101, 102, 103]);
idSet.forEach(id => console.log("User ID:", id));
// Logical note: Arrow functions keep iteration simple and expressive.

// Example 13: Nested arrow functions (currying)
const addThree = x => y => z => x + y + z;
console.log("Curried Sum:", addThree(2)(3)(4));
// Logical note: Currying allows partial application of arguments, enhancing reusability.

// Example 14: Sorting arrays using arrow function
const data = [5, 1, 8, 3];
data.sort((a, b) => a - b);
console.log("Sorted:", data);
// Logical note: Compact comparison logic for sorting.

// Example 15: Default parameters in arrow functions
const greetUser = (name = "Guest") => console.log(`Welcome, ${name}!`);
greetUser("Saira");
greetUser();
// Logical note: Defaults simplify function calls and prevent undefined values.

// Example 16: Destructuring parameters
const showDetails = ({ name, age }) => console.log(`${name} is ${age} years old`);
showDetails({ name: "Akhtar", age: 23 });
// Logical note: Cleanly extract properties within the parameter list.

// Example 17: Searching arrays
const findStudent = name => students.find(s => s.name === name);
console.log("Found:", findStudent("Saira"));
// Logical note: Short-circuit search logic with concise syntax.

// Example 18: Error handling
const safeDivide = (a, b) => {
  if (b === 0) throw new Error("Division by zero not allowed");
  return a / b;
};
try {
  console.log(safeDivide(10, 2));
  console.log(safeDivide(10, 0));
} catch (e) {
  console.error("Error:", e.message);
}
// Logical note: Error logic can coexist naturally with arrow functions.

// Example 19: Real-world data processing
const employees = [
  { name: "Ali", salary: 50000 },
  { name: "Saira", salary: 65000 },
  { name: "Akhtar", salary: 80000 },
];
const highEarners = employees
  .filter(e => e.salary > 60000)
  .map(e => e.name.toUpperCase());
console.log("High Earners:", highEarners);
// Logical note: A real-world demonstration of arrow functions with chained operations.

// Example 20: Combining multiple arrow function concepts
const pipeline = value => ({
  double: () => pipeline(value * 2),
  increment: () => pipeline(value + 1),
  get: () => value
});
const result = pipeline(5).double().increment().double().get();
console.log("Pipeline Result:", result);
// Logical note: Demonstrates immutability and method chaining using arrows.

// Example 21: Async arrow with try/catch
const asyncTask = async () => {
  try {
    const response = await fetchData();
    console.log("Async:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
asyncTask();
// Logical note: Async/await works naturally with arrow functions.

// Example 22: Using arrow function with class callbacks
class Button {
  constructor(label) {
    this.label = label;
  }
  click() {
    setTimeout(() => console.log(`Button '${this.label}' clicked!`), 1000);
  }
}
const btn = new Button("Submit");
btn.click();
// Logical note: Using arrow ensures `this` inside callback still refers to the class instance.

// Example 23: Logical performance note
// Arrow functions are lightweight and ideal for inline logic,
// but for complex, reusable blocks, use traditional functions for readability.

// Example 24: Advanced usage — composition
const compose = (f, g) => x => f(g(x));
const add2 = x => x + 2;
const times3 = x => x * 3;
const add2ThenTimes3 = compose(times3, add2);
console.log("Compose Result:", add2ThenTimes3(4)); // (4 + 2) * 3 = 18
// Logical note: Arrow functions make function composition elegant and expressive.

// Example 25: Final thought
// Arrow functions are the foundation of modern JavaScript style.
// They encourage concise syntax, better readability, and functional programming habits.
// However, be aware of their `this` binding and avoid them in dynamic method contexts.
