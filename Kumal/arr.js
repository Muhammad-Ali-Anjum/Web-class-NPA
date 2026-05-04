// Array  order higher function
let arr = [1, 2, 3, 4, 5];
let squaredArr = arr.map(x => x * x);
console.log(squaredArr);
let evenArr = arr.filter(x => x % 2 === 0);
console.log(evenArr);
let sum = arr.reduce((acc, x) => acc + x, 0);
console.log(sum);
let hasEven = arr.some(x => x % 2 === 0);
console.log(hasEven);
let allPositive = arr.every(x => x > 0);
console.log(allPositive);
 
