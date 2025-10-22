const user = {};  // empty object

user.name = "Ali";       
user.age = 22;          
user.city = "Skardu";    

console.log(user);

const student = {};

for (let i = 1; i <= 3; i++) {
  student[`subject${i}`] = `Course ${i}`;
}

console.log(student);


const employee = {
  name: "Ali",
  position: "Developer",
  salary: 50000
};

const removeKey = "salary";
delete employee[removeKey];

console.log(employee);


const baseInfo = { name: "Ali" };
const extraInfo = { age: 22, city: "Skardu" };

const fullProfile = Object.assign({}, baseInfo, extraInfo);
console.log(fullProfile);


function formToObject(formData) {
  const obj = {};
  for (const [key, value] of formData.entries()) {
    obj[key] = value;
  }
  return obj;
}

const formData = new FormData();
formData.append("username", "Ali");
formData.append("email", "ali@example.com");

console.log(formToObject(formData));


const products = [
  { name: "Burger", price: 300, quantity: 2 },
  { name: "Pizza", price: 500, quantity: 1 },
  { name: "Juice", price: 150, quantity: 4 }
];

const totalBill = products
  .filter(p => p.price > 100)   // only expensive items
  .map(p => p.price * p.quantity) // total per product
  .reduce((sum, val) => sum + val, 0); // total amount

console.log("Total Bill:", totalBill);

const employees = [
  { name: "Ali", salary: 50000 },
  { name: "Bilal", salary: 60000 },
  { name: "Usman", salary: 55000 }
];

const totalSalary = employees
  .map(e => e.salary)
  .reduce((sum, val) => sum + val, 0);

console.log("Total Salary:", totalSalary);



