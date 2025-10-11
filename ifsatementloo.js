// =======================================
// 1. Check whether a number is Armstrong
// =======================================
let num1 = 153;
let temp1 = num1;
let sum1 = 0;
while (temp1 > 0) {
  let digit = temp1 % 10;
  sum1 += digit ** 3;
  temp1 = Math.floor(temp1 / 10);
}
console.log("1️⃣ Armstrong:", num1 === sum1 ? "Yes" : "No");

// =======================================
// 2. Sum of all prime numbers between 1 and 100
// =======================================
let total = 0;
for (let i = 2; i <= 100; i++) {
  let prime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j === 0) {
      prime = false;
      break;
    }
  }
  if (prime) total += i;
}
console.log("2️⃣ Sum of primes:", total);

// =======================================
// 3. Check if a string is palindrome
// =======================================
let str3 = "madam";
let reversed3 = "";
for (let i = str3.length - 1; i >= 0; i--) {
  reversed3 += str3[i];
}
console.log("3️⃣ Palindrome:", str3 === reversed3 ? "Yes" : "No");

// =======================================
// 4. Count vowels and consonants
// =======================================
let str4 = "hello world";
let vowels = 0, consonants = 0;
for (let ch of str4.toLowerCase()) {
  if ("aeiou".includes(ch)) vowels++;
  else if (ch >= 'a' && ch <= 'z') consonants++;
}
console.log("4️⃣ Vowels:", vowels, "Consonants:", consonants);

// =======================================
// 5. Reverse a string (no built-in)
// =======================================
let str5 = "javascript";
let rev5 = "";
for (let i = str5.length - 1; i >= 0; i--) rev5 += str5[i];
console.log("5️⃣ Reversed string:", rev5);

// =======================================
// 6. Factorial using for loop
// =======================================
let num6 = 6, fact = 1;
for (let i = 1; i <= num6; i++) fact *= i;
console.log("6️⃣ Factorial:", fact);

// =======================================
// 7. GCD of two numbers using loop
// =======================================
let a7 = 56, b7 = 98, gcd = 1;
for (let i = 1; i <= Math.min(a7, b7); i++) {
  if (a7 % i === 0 && b7 % i === 0) gcd = i;
}
console.log("7️⃣ GCD:", gcd);

// =======================================
// 8. Fibonacci series up to n terms
// =======================================
let n8 = 10, a = 0, b = 1;
console.log("8️⃣ Fibonacci:");
for (let i = 0; i < n8; i++) {
  console.log(a);
  let temp = a + b;
  a = b;
  b = temp;
}

// =======================================
// 9. Sum of even and odd digits separately
// =======================================
let num9 = 123456;
let evenSum = 0, oddSum = 0;
while (num9 > 0) {
  let d = num9 % 10;
  if (d % 2 === 0) evenSum += d;
  else oddSum += d;
  num9 = Math.floor(num9 / 10);
}
console.log("9️⃣ Even sum:", evenSum, "Odd sum:", oddSum);

// =======================================
// 10. Perfect number check
// =======================================
let num10 = 28, sum10 = 0;
for (let i = 1; i < num10; i++) {
  if (num10 % i === 0) sum10 += i;
}
console.log("🔟 Perfect number:", num10 === sum10 ? "Yes" : "No");

// =======================================
// 11. Swap two numbers (no third variable)
// =======================================
let x = 5, y = 10;
x = x + y;
y = x - y;
x = x - y;
console.log("11️⃣ Swapped:", "x =", x, "y =", y);

// =======================================
// 12. Maximum occurring character in a string
// =======================================
let str12 = "programming";
let freq = {};
for (let ch of str12) freq[ch] = (freq[ch] || 0) + 1;
let maxChar = "", maxCount = 0;
for (let key in freq) {
  if (freq[key] > maxCount) {
    maxCount = freq[key];
    maxChar = key;
  }
}
console.log("12️⃣ Max occurring char:", maxChar);

// =======================================
// 13. Count positive, negative, and zero in array
// =======================================
let arr13 = [2, -1, 0, 5, -3, 0];
let pos = 0, neg = 0, zero = 0;
for (let n of arr13) {
  if (n > 0) pos++;
  else if (n < 0) neg++;
  else zero++;
}
console.log("13️⃣ +:", pos, " -:", neg, " 0:", zero);

// =======================================
// 14. Skip multiples of 3
// =======================================
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0) continue;
  console.log(i);
}

// =======================================
// 15. Leap years 2000–2100
// =======================================
console.log("15️⃣ Leap years:");
for (let year = 2000; year <= 2100; year++) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year);
  }
}

// =======================================
// 16. Grade using switch
// =======================================
let marks = 85;
switch (true) {
  case marks >= 90:
    console.log("16️⃣ Grade: A");
    break;
  case marks >= 80:
    console.log("Grade: B");
    break;
  case marks >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: D");
}

// =======================================
// 17. Day name using switch
// =======================================
let day = 4;
switch (day) {
  case 1: console.log("17️⃣ Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid day");
}

// =======================================
// 18. FizzBuzz
// =======================================
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log("18️⃣ FizzBuzz");
  else if (i % 3 === 0) console.log("Fizz");
  else if (i % 5 === 0) console.log("Buzz");
  else console.log(i);
}

// =======================================
// 19. Strong number check
// =======================================
let num19 = 145, temp19 = num19, sum19 = 0;
while (temp19 > 0) {
  let d = temp19 % 10;
  let f = 1;
  for (let i = 1; i <= d; i++) f *= i;
  sum19 += f;
  temp19 = Math.floor(temp19 / 10);
}
console.log("19️⃣ Strong number:", sum19 === num19 ? "Yes" : "No");

// =======================================
// 20. Find duplicate elements in array
// =======================================
let arr20 = [1, 2, 3, 2, 4, 3, 5];
console.log("20️⃣ Duplicates:");
for (let i = 0; i < arr20.length; i++) {
  for (let j = i + 1; j < arr20.length; j++) {
    if (arr20[i] === arr20[j]) console.log(arr20[i]);
  }
}

// =======================================
// 21. Count words in a sentence (no split)
// =======================================
let sentence = "Hello world this is JavaScript";
let count = 0;
for (let i = 0; i < sentence.length; i++) {
  if (sentence[i] === ' ' && sentence[i + 1] !== ' ') count++;
}
console.log("21️⃣ Word count:", count + 1);

// =======================================
// 22. Second smallest number in array
// =======================================
let arr22 = [5, 2, 8, 1, 3];
let smallest = Math.min(...arr22);
let secondSmallest = Math.min(...arr22.filter(n => n !== smallest));
console.log("22️⃣ Second smallest:", secondSmallest);

// =======================================
// 23. Number pattern
// =======================================
for (let i = 1; i <= 5; i++) {
  let line = "";
  for (let j = 1; j <= i; j++) line += j;
  console.log(line);
}

// =======================================
// 24. Sum of series: 1² + 2² + 3² + … + n²
// =======================================
let n24 = 5, sum24 = 0;
for (let i = 1; i <= n24; i++) sum24 += i * i;
console.log("24️⃣ Sum of squares:", sum24);

// =======================================
// 25. Reverse a string & check palindrome
// =======================================
let str25 = "level";
let rev25 = "";
for (let i = str25.length - 1; i >= 0; i--) rev25 += str25[i];
console.log("25️⃣", str25 === rev25 ? "Palindrome" : "Not Palindrome");
