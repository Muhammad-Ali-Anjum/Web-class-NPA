/*
Questions:

Q1: Write a program to check whether a given number is Prime or Not Prime using function.

Q2: Write a program to print the Fibonacci Series up to N terms using function.

Q3: Write a program that accepts an array of integers from the user. 
    The program should move all zeros in the array to the end 
    while maintaining the relative order of the non-zero elements.

Q4: Given an array of integers, find the maximum and minimum element 
    without using built-in functions.

Q5: Print a hollow square of N rows with both diagonals filled with stars.
    Example (N=7):
    * * * * * * *
    * *       * *
    *   *   *   *
    *     *     *
    *   *   *   *
    * *       * *
    * * * * * * *
*/

// ------------------- Q1: Prime Number -------------------
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}
var number = 17; // change this value
console.log(number + " is " + (isPrime(number) ? "Prime" : "Not Prime"));

// ------------------- Q2: Fibonacci Series -------------------
function fibonacciSeries(n) {
    var a = 0, b = 1, next;
    if (n >= 1) console.log(a);
    if (n >= 2) console.log(b);
    for (var i = 3; i <= n; i++) {
        next = a + b;
        console.log(next);
        a = b;
        b = next;
    }
}
var terms = 10; // change number of terms
fibonacciSeries(terms);

// ------------------- Q3: Move Zeros to End -------------------
function moveZerosToEnd(arr) {
    var n = arr.length;
    var result = [];
    var count = 0;

    // Copy non-zero elements
    for (var i = 0; i < n; i++) {
        if (arr[i] != 0) {
            result[count] = arr[i];
            count++;
        }
    }

    // Fill remaining with zeros
    while (count < n) {
        result[count] = 0;
        count++;
    }
    return result;
}
var array = [0, 1, 0, 3, 12]; // change array here
var res = moveZerosToEnd(array);
console.log("Array after moving zeros to end:");
for (var i = 0; i < res.length; i++) {
    console.log(res[i]);
}

// ------------------- Q4: Find Maximum and Minimum -------------------
function findMaxMin(arr) {
    var max = arr[0];
    var min = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    console.log("Maximum:", max);
    console.log("Minimum:", min);
}
var numbers = [5, 8, 2, 9, 1]; // change array here
findMaxMin(numbers);

// ------------------- Q5: Hollow Square with Diagonals -------------------
function printHollowSquare(n) {
    for (var i = 0; i < n; i++) {
        var row = "";
        for (var j = 0; j < n; j++) {
            if (i == 0 || i == n-1 || j == 0 || j == n-1 || i == j || j == n-i-1) {
                row += "* ";
            } else {
                row += "  ";
            }
        }
        console.log(row);
    }
}
var N = 7; // change size of square
printHollowSquare(N);



// --------------------------- Q1: OOP - Run-Time Polymorphism ---------------------------
console.log("Q1 – OOP (Run-Time Polymorphism)");

class Shape {
    area() {
        return 0; // default
    }
}

class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return 3.14159 * this.radius * this.radius;
    }
}

// Base class reference simulation
var shapes = [new Rectangle(5, 3), new Circle(4)];
for (var i = 0; i < shapes.length; i++) {
    console.log("Area of shape " + (i+1) + ": " + shapes[i].area());
}

// --------------------------- Q2: OOP - Inheritance/Encapsulation ---------------------------
console.log("\nQ2 – OOP (Inheritance / Encapsulation)");

class Student {
    constructor(name, marks) {
        this._name = name;   // private by convention
        this._marks = marks; // private by convention
    }

    getName() {
        return this._name;
    }

    getMarks() {
        return this._marks;
    }

    setMarks(marks) {
        this._marks = marks;
    }
}

class Result extends Student {
    constructor(name, marks) {
        super(name, marks);
    }

    grade() {
        var marks = this.getMarks();
        if (marks >= 90) return "A+";
        else if (marks >= 75) return "A";
        else if (marks >= 60) return "B";
        else if (marks >= 50) return "C";
        else return "F";
    }
}

var student1 = new Result("Ali", 82);
console.log("Student: " + student1.getName() + ", Grade: " + student1.grade());

// --------------------------- Q3: 2D Array Rotate 90° Clockwise ---------------------------
console.log("\nQ3 – 2D Array Rotate 90° Clockwise");

function rotateMatrix(matrix, N) {
    for (var i = 0; i < N / 2; i++) {
        for (var j = i; j < N - i - 1; j++) {
            var temp = matrix[i][j];
            matrix[i][j] = matrix[N - j - 1][i];
            matrix[N - j - 1][i] = matrix[N - i - 1][N - j - 1];
            matrix[N - i - 1][N - j - 1] = matrix[j][N - i - 1];
            matrix[j][N - i - 1] = temp;
        }
    }
}

// Example matrix
var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

rotateMatrix(matrix, 3);
console.log("Rotated Matrix:");
for (var i = 0; i < 3; i++) {
    var row = "";
    for (var j = 0; j < 3; j++) {
        row += matrix[i][j] + " ";
    }
    console.log(row);
}

// --------------------------- Q4: Recursion Sum of Digits ---------------------------
console.log("\nQ4 – Recursion Sum of Digits");

function sumOfDigits(n) {
    if (n == 0) return 0;
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

var num = 259;
console.log("Sum of digits of " + num + ": " + sumOfDigits(num));

// --------------------------- Q5: Find Smallest Number ---------------------------
console.log("\nQ5 – Smallest Number");

var numbers = [12, 4, 56, 7, 2, 9, 18, 33, 1, 22]; // example input
var smallest = numbers[0];

for (var i = 1; i < numbers.length; i++) {
    if (numbers[i] < smallest) smallest = numbers[i];
}

console.log("Smallest number: " + smallest);

