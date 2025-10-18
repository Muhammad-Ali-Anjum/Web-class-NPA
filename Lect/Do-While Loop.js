

console.log("=== DO-WHILE Loop Examples ===");

// Basic Do-While Loop
console.log("Example 1: Basic Do-While Loop");
let i = 1;
do {
    console.log(`i = ${i}`);
    i++;
} while (i <= 5);
console.log("\n");

// Odd Numbers 1-19
console.log("Example 2: Odd Numbers 1-19");
let odd = 1;
do {
    console.log(odd);
    odd += 2;
} while (odd <= 19);
console.log("\n");

// Multiplication Table of 7
console.log("Example 3: Multiplication Table of 7");
let m = 1;
do {
    console.log(`7 x ${m} = ${7 * m}`);
    m++;
} while (m <= 10);
console.log("\n");

// Reverse Triangle Pattern
console.log("Example 4: Reverse Triangle Pattern");
let r = 5;
do {
    let line = '';
    let c = 1;
    do {
        line += '* ';
        c++;
    } while (c <= r);
    console.log(line);
    r--;
} while (r >= 1);
console.log("\n");

// Nested Multiplication Table 1x1 to 3x3
console.log("Example 5: Nested Multiplication Table");
let outer = 1;
do {
    let inner = 1;
    do {
        console.log(`${outer} x ${inner} = ${outer * inner}`);
        inner++;
    } while (inner <= 3);
    outer++;
} while (outer <= 3);
console.log("\n");

console.log("✅ DO-WHILE Loop Lecture End");
