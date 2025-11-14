// ===============================================
// JS FOR Loop Lecture – Basic to Advanced
// ===============================================

console.log("=== FOR Loop Examples ===");

// Basic For Loop
console.log("Example 1: Basic For Loop");
for (let i = 1; i <= 5; i++) {
    console.log(`i = ${i}`);
}
console.log("\n");

// Nested For Loop
console.log("Example 2: Nested For Loop (i=1 to 3, j=1 to 2)");
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i = ${i}, j = ${j}`);
    }
}
console.log("\n");

// Multiplication Table
console.log("Example 3: Multiplication Table 1-5");
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= 5; j++) {
        row += `${i * j}\t`;
    }
    console.log(row);
}
console.log("\n");

// Square Pattern
console.log("Example 4: Square Pattern");
let n = 4;
for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log("\n");

// Triangle Pattern
console.log("Example 5: Triangle Pattern");
for (let i = 1; i <= 5; i++) {
    let row = '';
    for (let j = 1; j <= i; j++) {
        row += '* ';
    }
    console.log(row);
}
console.log("\n");

// Multidimensional Array Iteration
console.log("Example 6: Multidimensional Array");
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`matrix[${i}][${j}] = ${matrix[i][j]}`);
    }
}
console.log("\n");

// Labeled Nested Loop
console.log("Example 7: Labeled Nested Loop");
outerLoop:
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (i === 2 && j === 2) break outerLoop;
        console.log(`i=${i}, j=${j}`);
    }
}
console.log("\n");

console.log("✅ FOR Loop Lecture End");


for (let i = 1; i <= 5; i++) { // Outer loop = rows
    let row = '';
    for (let j = 1; j <= 5; j++) { // Inner loop = columns
        row += `${i * j}\t`; // Multiply current row and column
    }
    console.log(row); // Print complete row after inner loop finishes
}
console.log("\n");
