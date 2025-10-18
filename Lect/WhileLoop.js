

console.log("=== WHILE Loop Examples ===");

// Basic While Loop
console.log("Example 1: Basic While Loop");
let i = 1;
while (i <= 5) {
    console.log(`i = ${i}`);
    i++;
}
console.log("\n");

// Sum of Numbers 1-10
console.log("Example 2: Sum of Numbers using While");
let sum = 0;
let num = 1;
while (num <= 10) {
    sum += num;
    num++;
}
console.log(`Sum = ${sum}`);
console.log("\n");

// Even Numbers 1-20
console.log("Example 3: Even Numbers 1-20");
let n = 2;
while (n <= 20) {
    console.log(n);
    n += 2;
}
console.log("\n");

// Factorial of 5
console.log("Example 4: Factorial of 5");
let factorial = 1;
let f = 5;
while (f > 1) {
    factorial *= f;
    f--;
}
console.log(`5! = ${factorial}`);
console.log("\n");

// Multiples of 3
console.log("Example 5: Multiples of 3 (1-30)");
let multiple = 3;
while (multiple <= 30) {
    console.log(multiple);
    multiple += 3;
}
console.log("\n");

// Nested While Loop – Triangle Pattern
console.log("Example 6: Triangle Pattern using Nested While");
let row = 1;
while (row <= 5) {
    let pattern = '';
    let col = 1;
    while (col <= row) {
        pattern += '* ';
        col++;
    }
    console.log(pattern);
    row++;
}
console.log("\n");

console.log("✅ WHILE Loop Lecture End");
