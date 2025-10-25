let person={}
person.name="nooori";
person.age=21;


console.log(person);
person.edu="web dev"
console.log(person);

let persons={
    name:"anjum",
    address: {
        city:"skardu",
        postalcode:16100,
        steet:"NPA acadmey",
    
    },
    del:["alamdar choek","ali chok", "banazer chow","main bzer"]

}
console.log("person details",persons);

console.log("delvery ",persons.del[0]);

console.log("__________________________________________");

// const del="name";
delete persons["address"];
console.log(persons);


// const student = {};

// for (let i = 1; i <= 3; i++) {
//   student[`subject${i}`] = `Course ${i}`;
// }
// console.log(student);


const products = [
  { name: "Burger", price: 300, quantity: 2 },
  { name: "Pizza", price: 500, quantity: 1 },
  { name: "Juice", price: 150, quantity: 4 }
];
const bill=products.filter(noori=> noori.price>400).map(noori=>{
    return noori.price*noori.quantity;
}).reduce((sum,val)=>sum + val)
console.log("Total Bill:", bill);

const employees = [
  { name: "Ali", salary: 5 },
  { name: "Bilal", salary: 6},
  { name: "Usman", salary: 4},
  { name: "noori", salary: 3}
];

const totalSalary = employees
  .map(e => e.salary).reduce((sum, val) => 
    {
       return sum + val});

console.log("Total Salary:", totalSalary);
