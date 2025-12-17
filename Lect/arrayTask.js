const arr = [3, 7, 2, 8];
const [first, ...rest] = arr;
const last = rest[rest.length - 1];

const sum = first + last;
let res=sum%2===0 ? "Even ":"odd";
console.log(sum % 2 === 0 ? "Even" : "Odd");
if(sum%2===0){
  console.log("even");
  
}

// task 2
const arr1 = [12, 5, 9, 21, 3];
let max = arr[0];
let typ=43;

for (let i = 1; i < arr1.length; i++) {
  if (arr1[i] > max) {
    max = arr[i];
  }
}
console.log(`the length of array is ${arr1.length}`);


console.log(max);

// Check whether a series is arithmetic using destructuring.
const arr3 = [4, 8, 12, 16];
const [a, b] = arr;
const diff = b - a;

let isArithmetic = true;

for (let i = 1; i < arr3.length - 1; i++) {
  if (arr3[i + 1] - arr3[i] !== diff) {
    isArithmetic = false;
    break;
  }
}

console.log(isArithmetic);
// Calculate average and count elements greater than average.

const arr4 = [10, 20, 30, 40];
let sums = 0;

for (let num of arr4) {
  sums += num;
}

const avg = sums / arr.length;
let count = 0;

for (let num of arr4) {
  if (num > avg) {
    count++;
  }
}

console.log(count);

// Swap first and second elements using destructuring.
let arr5 = [5, 9, 12];
[arr5[0], arr5[1]] = [arr5[1], arr5[0]];

console.log(arr5);
// Reverse an array without destructuring.
const arr6 = [1, 2, 3, 4, 5];
let reversed = [];

for (let i = arr6.length - 1; i >= 0; i--) {
  reversed.push(arr6[i]);
}

console.log(reversed);

// Determine whether a series is increasing or decreasing using destructuring

const arr7 = [20, 15, 10, 5];
const [firsts, second] = arr;

let type = second > firsts ? "Increasing" : "Decreasing";
console.log(type);

// Find the second smallest number without destructuring.
const arr8 = [7, 2, 9, 4, 1];

let smallest = Infinity;
let secondSmallest = Infinity;

for (let num of arr8) {
  if (num < smallest) {
    secondSmallest = smallest;
    smallest = num;
  } else if (num < secondSmallest && num !== smallest) {
    secondSmallest = num;
  }
}

console.log(secondSmallest);

// Separate the first element and remaining elements using destructuring.
const arr9 = [100, 200, 300, 400];
const [f, ...remain] = arr9;

console.log(f);
console.log(remain);
// Find the sum of all even numbers

const arr10 = [3, 6, 9, 12, 15, 18];
let add = 0;

for (let num of arr10) {
  if (num % 2 === 0) {
    add += num;
  }
}

console.log(add);
