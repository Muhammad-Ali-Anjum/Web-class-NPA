// // // // // // 

// // // // // // function
// // // // // function name(){
// // // // // console.log("server is runing....");

// // // // // }

// // // // // name();

// // // // // function add(a,b){
// // // // //     console.log(a+b);
    
// // // // // }
// // // // // add(10,30);

// // // // // function sub(a,b){
// // // // // return a-b;
// // // // // }
// // // // // let result=sub(20,10);
// // // // // console.log(result);


// // // // // arrow function
// // // // // let add=(a,b)=>{
// // // // //     console.log(a+b);
// // // // // }
// // // // // add(10,20);
// // // // // let hi=()=>{
// // // // //     console.log("hi");
// // // // // }
// // // // // hi();
// // // // // let syed=()=>{
// // // // //     console.log("syed");
// // // // // }
// // // // // syed();
// // // // // let syeed=()=> console.log("syeed");

// // // // // syeed();
// // // // // let add=(a,b)=> {
// // // // //     return a+b;
// // // // // }
// // // // // let result=add(10,20);
// // // // // console.log(result);
// // // // // console.log("==================");
// // // // // let adds=(a,b)=> a+b;
// // // // // let results=adds(20,30);
// // // // // console.log(results);

// // // // // const checkAge = (age) => age >= 18 ? 'Adult' : 'Minor';

// // // // // console.log(checkAge(20)); 
// // // // // console.log(checkAge(15));

// // // // // let votechecker=(age)=>{
// // // // //     return age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // // }
// // // // // console.log(votechecker(20));
// // // // // console.log(votechecker(15));

// // // // // let votecheck=(age)=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // // console.log(votecheck(20));
// // // // // console.log(votecheck(15));
// // // // // let votecheck=age=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // // console.log(votecheck(20));
// // // // // console.log(votecheck(15));

// // // // let votechecks=age=> {
// // // //     if(age>=18){
// // // //         return "you are eligible for vote";
// // // //     }
// // // //     return "you are not eligible for vote";
// // // // };
// // // // // console.log(votechecks(20));
// // // // console.log(votechecks(15));


// // // // Advanced Techniques with Higher Order Functions
// // // function add(x) {
// // //     return x + 2;
// // // }
// // // function mul(x) {
// // //     return x * 3;
// // // }
// // // function compose(f, g) {
// // //     return function(x) {
// // //         return f(g(x));
// // //   }; }
// // // const addThenMul = compose(mul, add)(4);
// // // // const result = addThenMul(4);
// // // console.log(addThenMul); // Output: 21

// // // function mul(x) {
// // //     return function(y) {
// // //         return x * y;
// // //   };
// // // }
// // // var mulFn = mul(2);
// // // console.log(mulFn(5));

// // // function hi(kuchbifun){
// // //     console.log("first function");
// // //     kuchbifun()
    
// // // }
// // // function kuchbifun(){
// // //     console.log("second function");
// // // }


// // // hi(kuchbifun);

// // // function add(a,b){
// // //     return a+b;
// // // }

// // // console.log(add(10,20,20,30)); // Output: 30
// // function add(a,b,...args){
// //     let sum=a+b; 
// //     for(let i of args){
// //         sum+=i;
// //     }
// //     return sum;
// // }

// // console.log(add(10,20,20,30,30));

// // function sum(...numbers) {
// //   return numbers.reduce((a, b) => a + b, 0);
// // }

// // console.log(sum(1, 2, 3, 4, 5)); 

// // function multiply(...numbers) {
// //     return numbers.reduce((a,b)=>a*b,1)
// // }
// // console.log(multiply(1, 2, 3, 4, 5));

// // array
// let a=[1,3,4,5];
// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);
// console.log(a[3]);
// console.log(a[4]);
// console.log(a);

// a.push(6);
// a.push(7);
// // a.unshift(0);
// // a.unshift(-1);
// // a.unshift(2);
// console.log(a);
// // a.pop();
// // a.pop();
// // a.pop();
// // a.pop();
// // a.pop();
// // a.pop();
// // console.log(a);

// // a.map((x)=>{
// //     console.log(x);
// // },1);
// // let arr=a.reduce((acc,curr)=>{
// //     return acc+curr;
// // },0);

// // console.log(arr);

// // a.slice(1,3);
// // console.log(a);
// // a.splice(4,2);
// // console.log(a);
// // let b=a.slice(1,3);
// // console.log(b);
// // let c=a.splice(1,3);
// // console.log(c);
// // console.log(a);

// a.map((x)=>{
//     console.log(x);
// });

// console.log(a);

// let val=a.reduce((acc,curr)=>{
//     console.log(acc,curr);
//     return acc+curr;
// },0);

// console.log(`the sum of array is ${val}`);

// a.forEach((x)=>{
//     console.log(`the value is ${x}`);
// }
// );
// let fil=a.filter((x)=>{
//     return x%2==0;
// });
// console.log(fil);

// let sum=a.some((x)=>{
//     return x%2==0;
// });
// console.log(sum);

// let er=a.every((x)=>{
//     return x%2==0;
// });
// console.log(er);

// ary=a.sort((a,b)=>{
//     return a-b;
// });
// console.log(ary);

// let car=["tsla","bmw","vits","honda","colra" ,"tx","tz"]
// // console.log(car[0]);
// let [tsal,bmw,vits,honda,colre,...remingcar]=car;

// console.log(vits);
// console.log(remingcar);
// console.log("----------------- boject-----------------");

// let person={
//     name:"sydain",
//     age:23,
//     email:"sy@gmail.com"

// }

// console.log(person);
// console.log(person.name);
// console.log(person.age);
// console.log(person.email);
// console.log("+++++++++++++++++today class++++++++++++++++");

// let {name,age,email}=person;
// console.log(name);
// console.log(age);

// // let persons=[
// //     {
// //           name:"sydain",
// //     age:23,
// //     email:"sy@gmail.com",
// //     adres:{
// //         cit:["skardu","shigr","KMG","KHP"],
// //         zip:[1610,23121,342124]
// //     }
// //     },
// //     {
// //     name:"muntazr",
// //     age:23,
// //     email:"sy@gmail.com"
// //     },
// //      {
// //     name:"mutaba",
// //     age:23,
// //     email:"sy@gmail.com"
// //     }

// // ];

// // console.log(persons);


// let persons = [
//     {
//         name: "sydain",
//         age: 23,
//         email: "sy@gmail.com",
//         adres: {
//             cit: ["skardu", "shigr", "KMG", "KHP"],
//             zip: [1610, 23121, 342124]
//         },
//         // Function inside the object
//         getResult: function() {
//             return `Name: ${this.name}, City: ${this.adres.cit[0]}, Zip: ${this.adres.zip[0]}`;
//         }
//     },
//     {
//         name: "muntazr",
//         age: 23,
//         email: "sy@gmail.com",
//         getResult: function() {
//             return `Name: ${this.name}, Email: ${this.email}`;
//         }
//     },
//     {
//         name: "mutaba",
//         age: 23,
//         email: "sy@gmail.com",
//         getResult: function() {
//             return `Name: ${this.name}, Age: ${this.age}`;
//         }
//     }
// ];

// // To see the results:
// persons.forEach(person => {
//     if (person.getResult) {
//         console.log(person.getResult());
//     }
// });

// let students = [
//     {
//         name: "Sydain",
//         marks: { 
//             math: 85,
//              english: 78, 
//              science: 92 
//             },
//         generateMarksheet: function() {
//             let total = this.marks.math + this.marks.english + this.marks.science;
//             const totl=300;
//             let percentage = (total / totl) * 100;
//             return `Name: ${this.name} |total marks: ${totl}| Obt Marks: ${total} | Percentage: ${percentage.toFixed(2)}%`;
//         }
//     },
//     {
//         name: "Muntazr",
//         marks: { math: 90, english: 85, science: 90 },
//          generateMarksheet: function() {
//             let total = this.marks.math + this.marks.english + this.marks.science;
//             const totl=300;
//             let percentage = (total / totl) * 100;
//             return `Name: ${this.name} |total marks: ${totl}| Obt Marks: ${total} | Percentage: ${percentage.toFixed(2)}%`;
//         }
//     }
// ];

// students.forEach(student => {
//     console.log(student.generateMarksheet());
// });




// const fruits = ['apple', 'banana', 'cherry', 'date'];

// console.log("--- 1. JOIN ---");
// // join() converts an array to a string. Default is a comma.
// console.log("Standard Join:", fruits.join());      // "apple,banana,cherry,date"
// console.log("Custom Join:  ", fruits.join(' - ')); // "apple - banana - cherry - date"
// console.log("No-space Join:", fruits.join(' '));    // "applebananacherrydate"


// console.log("\n--- 2. REVERSE (Mutates Original) ---");
// const numbers = [1, 2, 3, 4, 5];

// console.log("Reversed:", numbers); 
// numbers.reverse(); 
// console.log("Original:", numbers);

// console.log("\n--- 3. TOREVERSED (Modern / Non-destructive) ---");
// const colors = ['red', 'green', 'blue'];
// const reversedColors = colors.toReversed(); // ES2023 syntax
// console.log("New Array: ", reversedColors); 
// console.log("Original:  ", colors);        



// console.log("\n--- 4. THE STRING REVERSAL TRICK ---");
// const word = "JavaScript";
// const reversedWord = word.split('').reverse().join('');
// console.log(`"${word}" backwards is "${reversedWord}"`);



// console.log("\n--- 5. OTHER COMMON PROPERTIES/METHODS ---");
// const tech = ['HTML', 'CSS', 'JS'];

// // Length Property
// console.log("Length:   ", tech.length); // 3

// // Sort (Alphabetical by default)
// console.log("Sorted:   ", [...tech].sort()); 


// // Includes (Check existence)
// console.log("Includes: ", tech.includes('JS')); 

// x=23;


// let x
// console.log(x);

console.log(history());

function history(){
    // console.log("function is runing");
    return "loging..........."
    
}
// fn()
// let fn=()=>{
// console.log("arrow function is runing");

//     }
let v=43;

{
let v=43
}
    function outer() {
    let outerVar = "I'm in the outer scope!";
    function inner() {
        console.log(outerVar); 
        outerVar = "Updated"
    }
    return inner;  
}
const closure = outer(); 
closure();
closure();