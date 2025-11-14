// ===============================================
// JS Nested Loops – Complete Lecture (Basic to Advanced)
// ===============================================

// ================================
// 1️⃣ Basic Nested Loop
// ================================
console.log("Example 1: Basic Nested Loop");
for (let i = 1; i <= 3; i++) { // Outer loop controls rows
    for (let j = 1; j <= 2; j++) { // Inner loop controls columns
        console.log(`i = ${i}, j = ${j}`);
    }
}
console.log("\n");

// Logical explanation:
// Outer loop runs first (i = 1 → 3), and for each outer iteration,
// the inner loop runs completely (j = 1 → 2)

// ================================
// 2️⃣ Multiplication Table
// ================================
console.log("Example 2: Multiplication Table (1 to 5)");
for (let i = 1; i <= 5; i++) { // Outer loop = rows
    let row = '';
    for (let j = 1; j <= 5; j++) { // Inner loop = columns
        row += `${i * j}\t`; // Multiply current row and column
    }
    console.log(row); // Print complete row after inner loop finishes
}
console.log("\n");

// ================================
// 3️⃣ Pattern Printing
// ================================

// a) Square Pattern
console.log("Example 3a: Square Pattern");
let n = 4; // Size of square
for (let i = 1; i <= n; i++) { // Outer loop = rows
    let row = '';
    for (let j = 1; j <= n; j++) { // Inner loop = columns
        row += '* ';
    }
    console.log(row); // Print each row
}
console.log("\n");

// b) Triangle Pattern
console.log("Example 3b: Triangle Pattern");
for (let i = 1; i <= 5; i++) { // Rows
    let row = '';
    for (let j = 1; j <= i; j++) { // Number of stars = current row
        row += '* ';
    }
    console.log(row);
}
console.log("\n");

// c) Reverse Triangle Pattern
console.log("Example 3c: Reverse Triangle Pattern");
for (let i = 5; i >= 1; i--) { // Rows decreasing
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log("\n");

// ================================
// 4️⃣ Multidimensional Array Iteration
// ================================
console.log("Example 4: Multidimensional Array");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) { // Outer loop = rows
    for (let j = 0; j < matrix[i].length; j++) { // Inner loop = columns
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}
console.log("\n");

// ================================
// 5️⃣ Labeled Nested Loops (Advanced)
// ================================
console.log("Example 5: Labeled Nested Loop");
outerLoop: // Label for outer loop
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) { // Condition to break outer loop
            console.log("Breaking outer loop from inner loop");
            break outerLoop; // Advanced: break outer loop
        }
        console.log(`i=${i}, j=${j}`);
    }
}
console.log("\n");

// ================================
// 6️⃣ Best Practices & Logical Notes
// ================================
// 1. Outer loop runs first; inner loop runs fully for each outer iteration
// 2. Use nested loops for patterns, tables, and multidimensional arrays
// 3. Avoid too many nested loops (performance impact)
// 4. Use labeled loops to break outer loops from inside inner loops
// 5. For readability, use functions or array methods for deep nesting

console.log("✅ Complete Nested Loop Lecture End");


let arr=[1,2,3,4,5];
let sum=0;
for (let i=0;i<arr.length;i++){
    sum+=arr[i];
}
console.log("the sum of Array",sum);
