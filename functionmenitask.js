
// 1️⃣ Prime Number
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log("Prime(7):", isPrime(7));

// 2️⃣ Factorial
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log("Factorial(5):", factorial(5));

// 3️⃣ Numbers divisible by both 3 and 5 (1–100)
function divisibleBy3and5() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log(i);
    }
  }
}
divisibleBy3and5();

// 4️⃣ Sum of digits
function sumOfDigits(num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}
console.log("Sum of digits (123):", sumOfDigits(123));

// 5️⃣ Reverse a number
function reverseNumber(num) {
  let rev = 0;
  while (num > 0) {
    rev = rev * 10 + (num % 10);
    num = Math.floor(num / 10);
  }
  return rev;
}
console.log("Reverse(1234):", reverseNumber(1234));



// 6️⃣ Palindrome string
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Palindrome(madam):", isPalindrome("madam"));

// 7️⃣ Count vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log("Vowels in 'Hello World':", countVowels("Hello World"));

// 8️⃣ Longest word in a sentence
function longestWord(sentence) {
  let words = sentence.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) longest = word;
  }
  return longest;
}
console.log("Longest word:", longestWord("JavaScript is a powerful language"));

// 9️⃣ Capitalize first letter of each word
function capitalizeWords(sentence) {
  let words = sentence.split(" ");
  let capitalized = words.map(
    word => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return capitalized.join(" ");
}
console.log(capitalizeWords("hello world javascript"));

// 🔟 Check anagram
function isAnagram(str1, str2) {
  let normalize = str => str.split("").sort().join("").toLowerCase();
  return normalize(str1) === normalize(str2);
}
console.log("Anagram(listen, silent):", isAnagram("listen", "silent"));




// 11️⃣ Second largest number
function secondLargest(arr) {
  let max = Math.max(...arr);
  arr = arr.filter(num => num !== max);
  return Math.max(...arr);
}
console.log("Second largest:", secondLargest([10, 20, 30, 40, 50]));

// 12️⃣ Remove duplicates
function removeDuplicates(arr) {
  let unique = [];
  for (let item of arr) {
    if (!unique.includes(item)) unique.push(item);
  }
  return unique;
}
console.log("Unique:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));

// 13️⃣ Check if element exists
function elementExists(arr, element) {
  return arr.includes(element);
}
console.log("Exists(3):", elementExists([1, 2, 3, 4, 5], 3));

// 14️⃣ Sort array ascending (without sort)
function sortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
console.log("Sorted:", sortAscending([5, 2, 9, 1, 3]));

// 15️⃣ Average of numbers
function averageArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}
console.log("Average:", averageArray([10, 20, 30, 40, 50]));



// 16️⃣ Leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
console.log("Leap year 2024:", isLeapYear(2024));

// 17️⃣ Electricity bill
function electricityBill(units) {
  let bill = 0;
  if (units <= 100) bill = units * 5;
  else if (units <= 300) bill = 100 * 5 + (units - 100) * 8;
  else bill = 100 * 5 + 200 * 8 + (units - 300) * 10;
  return bill;
}
console.log("Bill(350 units):", electricityBill(350));

// 18️⃣ Pension eligibility
function pensionEligibility(age, gender) {
  if ((gender === "male" && age >= 60) || (gender === "female" && age >= 55)) {
    console.log("Eligible for pension");
  } else {
    console.log("Not eligible for pension");
  }
}
pensionEligibility(58, "female");

// 19️⃣ Triangle validation
function isTriangle(a, b, c) {
  if (a + b > c && a + c > b && b + c > a) {
    console.log("Can form a triangle");
  } else {
    console.log("Cannot form a triangle");
  }
}
isTriangle(3, 4, 5);

// 20️⃣ Grade calculation
function calculateGrade(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 60) return "C";
  else if (marks >= 45) return "D";
  else return "F";
}
console.log("Grade (85):", calculateGrade(85));



// 21️⃣ Even numbers from array
function evenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log("Even numbers:", evenNumbers([1, 2, 3, 4, 5, 6]));

// 22️⃣ Smallest number without Math.min()
function smallestNumber(arr) {
  let min = arr[0];
  for (let num of arr) {
    if (num < min) min = num;
  }
  return min;
}
console.log("Smallest:", smallestNumber([10, 5, 2, 8, 1]));

// 23️⃣ Sum of all prime numbers in array
function sumOfPrimes(arr) {
  function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let sum = 0;
  for (let num of arr) {
    if (isPrime(num)) sum += num;
  }
  return sum;
}
console.log("Sum of primes:", sumOfPrimes([2, 3, 4, 5, 6, 7]));

// 24️⃣ Count positives, negatives, and zeros
function countNumbers(arr) {
  let positive = 0, negative = 0, zero = 0;
  for (let num of arr) {
    if (num > 0) positive++;
    else if (num < 0) negative++;
    else zero++;
  }
  return { positive, negative, zero };
}
console.log("Count:", countNumbers([1, -2, 0, 5, -3, 0, 8]));

// 25️⃣ Fibonacci series
function fibonacciSeries(n) {
  let a = 0, b = 1, series = [a, b];
  for (let i = 2; i < n; i++) {
    let next = a + b;
    series.push(next);
    a = b;
    b = next;
  }
  return series;
}
console.log("Fibonacci(10):", fibonacciSeries(10));
