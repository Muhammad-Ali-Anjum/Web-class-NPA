
// 1️⃣ Creating an Object
const person = {
  name: "Ali",
  age: 22,
  city: "Skardu",
  isStudent: true
};

console.log("🔹 Step 1: Created Object:", person);


// 2️⃣ Accessing Properties
console.log("🔹 Dot Notation:", person.name);
console.log("🔹 Bracket Notation:", person["age"]);

const key = "city";
console.log("🔹 Dynamic Key Access:", person[key]);


// 3️⃣ Adding & Updating Properties
person.country = "Pakistan"; // add new
person.age = 23; // update existing
console.log("🔹 After Add & Update:", person);


// 4️⃣ Deleting a Property
delete person.isStudent;
console.log("🔹 After Delete:", person);


// 5️⃣ Nested Object Example
const student = {
  name: "Sara",
  marks: {
    math: 85,
    science: 90
  },
  subjects: ["Math", "Science", "English"]
};

console.log("🔹 Math Marks:", student.marks.math);
console.log("🔹 2nd Subject:", student.subjects[1]);


// 6️⃣ Method inside Object
const user = {
  name: "Ahmed",
  greet: function() {
    return "Hello, " + this.name;
  }
};
console.log("🔹 Using Object Method:", user.greet());


// 7️⃣ Looping through an Object
console.log("🔹 Looping with for...in:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}


// 8️⃣ Object.keys(), Object.values(), Object.entries()
console.log("🔹 Object.keys:", Object.keys(person));
console.log("🔹 Object.values:", Object.values(person));
console.log("🔹 Object.entries:", Object.entries(person));


// 9️⃣ Object.assign() – merge or copy objects
const extraInfo = { hobby: "Coding", age: 22 };
const merged = Object.assign({}, person, extraInfo);
console.log("🔹 Object.assign (merged):", merged);


// 🔟 Object.freeze() – lock object (no changes allowed)
const car = { brand: "Honda", model: "Civic" };
Object.freeze(car);
car.brand = "Toyota"; // ❌ no change
delete car.model; // ❌ no delete
console.log("🔹 Object.freeze Result:", car);


// 11️⃣ Object.seal() – can edit, but not add/remove
const item = { name: "Pen", price: 10 };
Object.seal(item);
item.price = 15; // ✅ allowed
item.color = "Blue"; // ❌ not allowed
delete item.name; // ❌ not allowed
console.log("🔹 Object.seal Result:", item);


// 12️⃣ Object.hasOwnProperty()
console.log("🔹 Has city?", person.hasOwnProperty("city")); // true
console.log("🔹 Has phone?", person.hasOwnProperty("phone")); // false


// 13️⃣ Object.fromEntries()
const arr = [["name", "Ali"], ["age", 22]];
const objFromArray = Object.fromEntries(arr);
console.log("🔹 Object.fromEntries:", objFromArray);


// 14️⃣ Object Destructuring
const product = { name: "Laptop", price: 70000 };
const { name, price } = product;
console.log("🔹 Destructuring:", name, price);


// 15️⃣ Spread Operator with Objects
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged2 = { ...obj1, ...obj2 };
console.log("🔹 Spread Operator Merge:", merged2);


// 16️⃣ Optional Chaining (?.)
const profile = {
  username: "Ali",
  address: { city: "Skardu" }
};
console.log("🔹 Existing Property:", profile.address?.city);
console.log("🔹 Missing Property (safe):", profile.address?.country);


// 17️⃣ Real-life Example: Calculate Total Bill
const products = [
  { name: "Burger", price: 300, quantity: 2 },
  { name: "Pizza", price: 500, quantity: 1 },
  { name: "Juice", price: 150, quantity: 4 }
];

const totalBill = products
  .filter(p => p.price > 100)           // keep items > 100
  .map(p => p.price * p.quantity)       // get total for each product
  .reduce((sum, val) => sum + val, 0);  // add all totals

console.log("🔹 Total Bill:", totalBill);


// 18️⃣ Real-life Example: Students Average Marks
const students = [
  { name: "Ali", marks: 85 },
  { name: "Sara", marks: 90 },
  { name: "Zain", marks: 75 }
];

const avgMarks = students
  .map(s => s.marks)
  .reduce((sum, val) => sum + val, 0) / students.length;

console.log("🔹 Average Marks:", avgMarks);
