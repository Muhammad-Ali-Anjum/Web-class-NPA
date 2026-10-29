// node js 
//  nodemon
// console.log("hello world");
// console.log("hello world");

// data types
// two type data type
// paramative datatype
// Non paramative datatypes
// paramaive data types 
// it cannot change the data 
// varibale and costant
// varibale : it can be change value 
// contast : value cannot chageable
//  paramative : paramative is a ds datatype which cannot change the value
// int var let const flooat , boolean
// operator 
//  assign operator  it represt by =
// var a=12;
// var a=43;
// console.log(a);
// let b=22;
// console.log(b);
// // let b=34;
// const c=21;
// console.log(c);
// const c=43
// compression operator
// <,>,<=,>=,==,!=
// logical operator 
// and && or || not !
// AND
//  T T  T
// T F F 
// F T F 
// F F F 
// OR 
// T T T
// T F T
// F T T
// F F F
// NOT
// T F 
// F T

// let a =199;
// let alive="death"
// if (a>=18 && alive=="alive"){
// console.log("eligble for vot");
// }
// else{
//     console.log("not eligbile");
    
// }

// let username="abc"
// let pswd=1234;
// if(username==="abc" && pswd==12345){
//     console.log("user login successfully");
    
// }
// else{
//     console.log("invlid credential");
    
// }
// marks 
// percentage =(totalMarks/obtMarks) *100
// let per =40;
// if (per >=80 && per<=100){
//     console.log("Grade A++");
    
// }
// else if (per >=70 && per <=80){
//     console.log("Grade A");

// }
// else if (per >=60 && per <=70){
//     console.log("Grade B");

// }
// else if(per >=50 && per <=60){
//     console.log("Grade C");

// }
// else{
//     console.log("Grade F");

// }

// let balance=200;
// console.log("Enter 1 for balance check \nEnter 2 for recharge \n3 for package");
// let input=3;
// if (balance>=100){
// if (input==1){
//     console.log(` your balance is ${balance}`);
    
// }
// else if (input===2){
//     console.log(`You have successfully recharge`);
    
// }
// else if(input==3){
//     console.log("Enter 1 for weekly \nEnter 2 for Monthly ");
//     packagees=1
//     if(packagees==1){
//         console.log("you have successfly weekly package");
        
//     }
//     else if (packagees==2){
//         console.log("you have successfly monthly package");
//     }
//     else{
//         console.log("please choose correct option");
//     }
// }
//  else{
//         console.log("please choose correct option");
//     }


// }
// else{
//     console.log("insuffcient balance");
    
// }

// let page="/contact";
// switch (page){
//     case '/home':
//         console.log("login Home page");
//         break
//     case '/about':
//         console.log("login about page");
//         break
//     case "/contact":
//         console.log("login contact page");
//         break
//     default:
//         console.log("404 page not found");      
// }

// let a=3;
// if (a>=18){
//     console.log("eligibal for vote costing");
    
// }
// else{
// console.log("not elibile");}

// if (a%2==0){
//     console.log("even numver");
    
// }
// else{
//     console.log("odd number");
    
// }
// callback function

// function grd(name,callback){
// console.log("Hi my name is ", name);
// callback();

// }
// function printing(){
//     console.log("this is printing function ");  
// }
// grd("ali",printing)

// for(let i=1;i<10;i++){
//     console.log(i );
// }
// // ++a ,a++
// let total=0;
// for (let a=1;a<100;a++){
//     // total=total+a;
// total+=a;
// // console.log(total);

// }
// console.log(`total sum of 1 to 100 = ${total}`);

// for (let i=1;i<20;i++){
//     console.log(`${i} X 3 = ${i*3}`);
    
// }
// for (let i=0;i<30;i++){
//     if(i%2==0){
//         console.log(i);
        
//     }
// }
// console.log("divisable by 4");

// for (let i=0;i<20; i++){
//     if(i%4==0){
//         console.log(i);
        
//     }
// }

// console.log("========================");

// for (let i=0;i<20;i++){
//     if (i==3 || i==5) {
//         continue;
//     }
//     else{
//     console.log(i);

//     }
    
// }
// // nested loop
// console.log("----------------");
// let n=20
// for (let i=1;i<5;i++){
//     for(let j=1;j<n;j++){//4 less then 4 
//         console.log(i,j);
        
//     }
// }

// for (let i=0;i<10;i++){
//     let row="*"
//     for(j=0;j<10;j++){
//         row+=row;
        
//     }
    
//     console.log(row ,"/n");
// }

// let aa=1;
// let res=aa++;
// console.log(res);
// let b=1;
// let reslt=++b;
// console.log(reslt);



// let a=1;
// while (a<5){
//     console.log(a);
//     a++;

    
// }

// let dos=1;
// do{
// console.log(dos);
// dos++

// }while(dos<5)

// let arr=[1,2,3,4,5,6,7,8];
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);
// console.log(arr[4]);
// console.log(arr[5]);
// console.log(arr[6]);
// console.log(arr[7]);
// // console.log(arr[8])
// console.log(arr);
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);   
// }
// let total=0
// for (let i=0;i<arr.length;i++){
// total+=arr[i];
// }
// let totals=0
// console.log(`Total numbet ${total}`);
// for (let i=0;i<arr.length;i++){
//     if(i%2==0){
//     totals+=arr[i];
//     }
// }
// console.log(`Total numbet ${totals}`);

// array
// let arr=[1,34,34,67,8,99,754,2,[2,4,56,7,7]]
// // console.log(arr[8]);
// let array=[12,3,4,5,6]
// console.log(array);
// array.push(4)
// array.push(12)
// array.push(32)
// // array.push(52,3,4,5,5,4,56,5,56,565,6,5,6,56,3)
// console.log(array);
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.pop()
// array.push(4)
// array.push(12)
// array.push(32)
// console.log(array);
// array.unshift(2,353,5,35,3553,53)
// array.shift()
// array.shift()
// array.shift()
// array.shift()
// // array.shift()
// // array.shift()
// // array.shift()
// // array.shift()
// // array.shift()
// console.log(array);

// let res=array + arr

// console.log(res);

// let text = (age < 18) ? "Minor" : "Adult";
// let age = 10;
// let text;
// if (age < 18) {
//     text = "Minor";
//     console.log(text);
// }
// else {
//     text = "Adult";
//     console.log(text);
// }
// //  ternary operator
// let result=(age < 18) ? "Minor" : "Adult";
// console.log(result);
// // let nname=(condition )? "true" : "false";
// // nested loop pattern
// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }
// for (let i = 5; i >= 1; i--) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "*";
//     }
//     console.log(row);
// }

// let arr=[1,2,3,4,5,6,67,7,7,6,5,43,2,222,3,343];
// // console.log(arr);
// for (let i=0;i<arr.length;i++)
// {
//     console.log(i,arr[i]);
    
// }
// let arr=[1,2,3,4,5,6,67,7,7,6,5,43,2,222,3,343];
// console.log(arr);

// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()
// arr.pop()


// console.log(arr);
// arr.push(4)
// arr.push(12)
// arr.push(32)
// console.log(arr);
// arr.unshift(2,353,5,35,3553,53)
// console.log(arr);

// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// arr.shift()
// console.log(arr);

// // splice
// let arr1=[1,2,3,4,5,6,7,8,9,10];
// let splicesarr=arr1.splice(2,4);
// console.log(` array: ${arr1}`);
// console.log(`removed elements: ${splicesarr}`);

// // slice
// let arr2=[1,2,3,4,5,6,7,8,9,10];
// let slicedarr=arr2.slice(1,3);
// console.log(` array: ${arr2}`);
// console.log(`sliced array: ${slicedarr}`);
// // index check
// let arr3=[1,2,3,4,5,6,7,8,9,10];
// let index=arr3.indexOf(3);
// console.log(` array: ${arr3}`);
// console.log(`index of 3: ${index}`);

// console.log(`arr3[0]: ${arr3[0]}`);
// console.log(`arr3[2]: ${arr3[2]}`);
// console.log(`arr3[4]: ${arr3[4]}`);

// // includes check
// let arr4=[1,2,3,4,5,6,7,8,9,10];
// let includescheck=arr4.includes(5);
// console.log(` array: ${arr4}`);
// console.log(`includes check for 5: ${includescheck}`);

// // reverse
// let arr5=[1,2,3,4,5,6,7,8,9,10];
// let reversedarr=arr5.reverse();
// console.log(` array: ${arr5}`);
// console.log(`reversed array: ${reversedarr}`);

// // sort
// let arr6=[5,2,9,1,5,6];
// let sortedarr=arr6.sort((a,b)=>a-b);
// console.log(` array: ${arr6}`);
// console.log(`sorted array: ${sortedarr}`);


// let arr=[1,2,3,4,5,6]
// console.log(arr);

// let splices=arr.splice(1,2)
// console.log(splices);

// let splice=arr.slice(1,2)
// console.log(splice);
// let sorts=arr.reverse()
// console.log(sorts);

// let indexs=arr.indexOf(1)
// console.log(indexs);

// let inclue=arr.includes(1);
// console.log(inclue);

// function hi(){
//     console.log("hi this is function");
    
// }
// hi()
// // hi()

// // hi()

// function add(a,b){
//     let sum=a+b;
//     console.log(`sum of ${a} and ${b} is ${sum}`);
// }
// add(2,3)
// add(4,5)

// // function base calculation
// function calculate(num1,num2,operator){
//     let result;
//     switch(operator){
//         case '+':
//             result=num1+num2;
//             break;
//         case '-':
//             result=num1-num2;
//             break;
//         case '*':
//             result=num1*num2;
//             break;
//         case '/':
//             result=num1/num2;
//         default:
//             console.log("invlid sytex");
//             return null;
//             console.log(result);
            
//     }}
//     calculate(1,2,'+')

// function

function greed(){
    console.log("hi this is function");
}
// greed()
// greed()
// greed()

// greeding for teacher function

// function greeding(name){
//     console.log(`Sir ${name}! salam how are you?`);
// }
// greeding("Ali")
// greeding("Ahmed")
// greeding("Omar")

// // calcualtion function
// function calculate(num1, num2, operator) {
//     let result;
//     switch(operator){
//         case '+':
//             result=num1+num2;
//             break;
//         case '-':
//             result=num1-num2;
//             break;
//         case '*':
//             result=num1*num2;
//             break;
//         case '/':
//             result=num1/num2;
//         default:
//             console.log("invalid syntax");
//             return null;
//     }
//     console.log(`Result: ${result}`);
// }
// calculate(1,2,'+')
// calculate(3,4,'-')
// arrow function its type of function which is used in es6
// const greet=()=>{
//     console.log("hi this is arrow function");
// }
// greet()

// const grd=()=> console.log("hi this is arrow function");
// grd()

// const add=(a,b)=>{
//         console.log(`sum of ${a} and ${b} is ${a+b}`);
//     }

//     add(3,3)
// // short hand arrow function
// const sub=(a,b)=>console.log(`difference of ${a} and ${b} is ${a-b}`);
// sub(5,3)

// arrow function with rest/ spread operator
// const greetAll=(...names)=>{
//     names.forEach(name=>{
//         console.log(`Hello ${name}`);
//     });
// }
// greetAll("Ali","Ahmed","Omar","Zainab","Fatima","Ayesha","Hassan","Hussain","Zara","Amina");

// arrow function in js
let sum=(...rest)=>{
    let total=0;
    rest.forEach(num=>{
        total+=num;
    });
    return total;
}

// console.log(`Sum of numbers: ${sum(1,2,3,4,5,1,2,3,4,5,1,2,3,4,5)}`);

// rest operator is used to pass multiple arguments to a function as an array. In the above example, we are using the rest operator to pass multiple numbers to the sum function and then calculating the total sum of those numbers. The forEach method is used to iterate over each number in the array and add it to the total variable. Finally, we return the total sum and log it to the console.

// rest operator with function
// let card=(...cards)=>{
//     cards.forEach(card=>{
//         console.log(`Card: ${card}`);
//     });
// }
// card("Ace of Spades","King of Hearts","Queen of Diamonds","Jack of Clubs","10 of Hearts","9 of Diamonds","8 of Clubs","7 of Hearts","6 of Diamonds","5 of Clubs");


// higher order function

// let arr=[1,23,4,5,6,7,8,9,0,9876,43];
// arr.map((num)=>console.log(num))
// fltr=arr.filter(num=>num%2==2
// )
// console.log(fltr);

// let arr=[1,2,3,5,45,46,5,66,75,43,32];
// let filtr=arr.filter(
//     (num)=>{
// return num%2==1
//     }
// )
// console.log(filtr);

// // map function
// let maps=arr.map((num)=>num)
// console.log(maps);

// // for each
// // let for each
// arr.forEach(num=>console.log(num)
// )
// // reduce method
// let sumss=arr.reduce((acumaltor,currentvalu)=>{
//     return acumaltor+currentvalu
    
//     // console.log(acumaltor," : ",currentvalu);
    
// },0)
// console.log("sum of all array",sumss);

// let arr=[12,3,4,5,6,7,8,6,54,32]
// let map =arr.map(num=>num);
// console.log(map);
// let arrsum=arr.reduce((acuulator,currentValue)=>acuulator+currentValue)
// console.log("sum of array is :",arrsum);
// arr.forEach(num=>console.log(num)
// )

// let finds=arr.find(num=>num%2==0);
// console.log(finds);

// let arr=[1,23,4,45,3,54,32,6,54,56,5434,56543,6,445,67,654]
// console.log(arr[0]);
// // Distructuing
// let [a,b,c,...rest]=arr;
// console.log(a,b ,c,rest);

let arr=[12,3,4,5,6,7,3,88,99,9,7,6,54,3,2,2];
// console.log(arr[2]);
// let [a,b,c]=arr;
// console.log(a);
// console.log(b);
// console.log(c);
// let [d,e,...rest]=arr
// console.log(d);
// console.log(e);
// console.log(rest);

// // object
// let obj={
//     name:"syeed",
//     age:23,
//     city:["skd","khp","kmg","sgr"]

// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj.city[1]);
// object

// let obj={
//     id:1,
//     name:"anjum",
//     age:34,

// }
// console.log(obj.name);
// console.log(obj.age);

// console.log(obj.id);

// let objs={
//     name:"meena",
//     age:15,
//     adress:{
//         HouseNumbber:1234,
//         city:"skardu",
//         zipCode:16100,
//         street:"123bcss alamdar chowk"
//     }
// }
// console.log(objs);
// console.log(objs.adress.HouseNumbber);


// let obj = {
//     id: 1,
//     name: "abc",
//     marks: [50, 40, 60, 70, 80, 90],

//     functions: function () {
//         console.log(`Name ${this.name} makes ${this.marks}`);

//         return this.marks.reduce((act, currentValue) => {
//             console.log(act, currentValue);
//             return act + currentValue;
//         }, 0);
//     }
// };

// // console.log(obj.functions());


// let student = {
//     id: 101,
//     name: "Ali",
//     subjects: [
//         { name: "Computer Science", marks: 85 },
//         { name: "Mathematics", marks: 78 },
//         { name: "English", marks: 72 },
//         { name: "Physics", marks: 90 },
//         { name: "Urdu", marks: 80 }
//     ],

//     calculateResult: function () {
//         // Calculate total obtained marks
//         let total = this.subjects.reduce((sum, subject) => {
//             return sum + subject.marks;
//         }, 0);

//         // Calculate maximum marks
//         let maximumMarks = this.subjects.length * 100;

//         // Calculate percentage
//         let percentage = (total / maximumMarks) * 100;

//         // Determine grade
//         let grade;

//         if (percentage >= 80) {
//             grade = "A";
//         } else if (percentage >= 70) {
//             grade = "B";
//         } else if (percentage >= 60) {
//             grade = "C";
//         } else if (percentage >= 50) {
//             grade = "D";
//         } else {
//             grade = "Fail";
//         }

//         // Return the complete result
//         return {
//             studentName: this.name,
//             totalMarks: total,
//             maximumMarks: maximumMarks,
//             percentage: percentage.toFixed(2) + "%",
//             grade: grade
//         };
//     }
// };

// // Display student result
// console.log(student.calculateResult());


// let students = [
//     {
//         id: 1,
//         name: "Ali",
//         className: "ICS Part 1",
//         subjects: [
//             { name: "Computer Science", marks: 85 },
//             { name: "Mathematics", marks: 78 },
//             { name: "English", marks: 72 },
//             { name: "Physics", marks: 90 },
//             { name: "Urdu", marks: 80 }
//         ]
//     }


// ];

// // Calculate student result
// function calculateResult(student) {
//     let total = student.subjects.reduce((sum, subject) => {
//         return sum + subject.marks;
//     }, 0);

//     let maximumMarks = student.subjects.length * 100;
//     let percentage = (total / maximumMarks) * 100;

//     let grade;

//     if (percentage >= 80) {
//         grade = "A+";
//     } else if (percentage >= 70) {
//         grade = "A";
//     } else if (percentage >= 60) {
//         grade = "B";
//     } else if (percentage >= 50) {
//         grade = "C";
//     } else if (percentage >= 40) {
//         grade = "D";
//     } else {
//         grade = "F";
//     }

//     let status = student.subjects.every(subject => subject.marks >= 40)? "Pass": "Fail";

//     return {
//         total,
//         maximumMarks,
//         percentage: percentage.toFixed(2),
//         grade,
//         status
//     };
// }

// // CREATE: Add a student
// function addStudent(name, className, subjects) {
//     let newStudent = {
//         id: students.length ? Math.max(...students.map(s => s.id)) + 1  : 1,
//         name,
//         className,
//         subjects
//     };

//     students.push(newStudent);
//     console.log("Student added successfully!");
// }

// // READ: Display all student results
// function showResults() {
//     if (students.length === 0) {
//         console.log("No student records found.");
//         return;
//     }

//     students.forEach(student => {
//         let result = calculateResult(student);

//         console.log("\n--- STUDENT RESULT ---");
//         console.log("ID:", student.id);
//         console.log("Name:", student.name);
//         console.log("Class:", student.className);

//         console.log("\nSubject-wise Marks:");

//         student.subjects.forEach(subject => {
//             console.log(`${subject.name}: ${subject.marks}/100`);
//         });

//         console.log("\nTotal:", result.total, "/", result.maximumMarks);
//         console.log("Percentage:", result.percentage + "%");
//         console.log("Grade:", result.grade);
//         console.log("Status:", result.status);
//     });
// }

// // UPDATE: Change student details or marks
// function updateStudent(id, newName, newClass, newSubjects) {
//     let student = students.find(s => s.id === id);

//     if (!student) {
//         console.log("Student not found!");
//         return;
//     }

//     student.name = newName;
//     student.className = newClass;
//     student.subjects = newSubjects;

//     console.log("Student result updated successfully!");
// }

// // DELETE: Remove a student
// function deleteStudent(id) {
//     let oldLength = students.length;

//     students = students.filter(student => student.id !== id);

//     if (students.length < oldLength) {
//         console.log("Student deleted successfully!");
//     } else {
//         console.log("Student not found!");
//     }
// }

// // SEARCH: Find a student by ID
// function searchStudent(id) {
//     let student = students.find(s => s.id === id);

//     if (student) {
//         console.log(student);
//         console.log("Calculated Result:", calculateResult(student));
//     } else {
//         console.log("Student not found!");
//     }
// }


// // 1. Display existing results
// showResults();

// // 2. Add a new student
// addStudent("Ahmed", "ICS Part 1", [
//     { name: "Computer Science", marks: 92 },
//     { name: "Mathematics", marks: 88 },
//     { name: "English", marks: 75 },
//     { name: "Physics", marks: 81 },
//     { name: "Urdu", marks: 79 }
// ]);

// // 3. Update the student's result
// updateStudent(1, "Ali Khan", "ICS Part 1", [
//     { name: "Computer Science", marks: 95 },
//     { name: "Mathematics", marks: 82 },
//     { name: "English", marks: 76 },
//     { name: "Physics", marks: 91 },
//     { name: "Urdu", marks: 85 }
// ]);

// 4. Search for a student
// searchStudent(2);

// 5. Display all results again
// showResults();

// 6. Delete a student
// deleteStudent(2);

// 7. Display final records
// showResults();


// let objs={
//     id:1,
//     name:"abc",
//     age:32,
//     group:"aas"
// }

// let {id,name,...rest}=objs
// console.log(id,name);
// console.log(rest);


// hell function

// scope of varable
// local 
// global
// let a=43;
// function outer(){
//     let b=30;
//     console.log("outer function is runing");
    
//     function innerfun(){
//         console.log("inner function is rining");
        
//         function lastinner(inner){
//             console.log("last inner function is runing");
            
//             return innerfun();
//         }
//         return lastinner

//     }
// }
// outer()
// // innerfun()
// // lastinner()


// let objs={
// id:1,
// name:"abc",
// age:21,
// adres:{
//     city:"skd",
//     steet:"12bsc",
//     postalCode:16100
// }

// }
// console.log(objs.adres);
// console.log(objs.age);
// // let {id,name}=objs
// // console.log(id);
// // console.log(name);
// // console.log(adres);
// let {id,name,...rest}=objs
// console.log(rest);



// let n = Number(prompt("Enter N"));
// let n=3

// // for (let i = 1; i <= n; i++) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //         row += "*";
// //     }
// //     for (let j = 1; j <= 2 * (n - i); j++) {
// //         row += " ";
// //     }
// //     for (let j = 1; j <= i; j++) {
// //         row += "*";
// //     }
// //     console.log(row);
// // }

// // for (let i = n - 1; i >= 1; i--) {
// //     let row = "";
// //     for (let j = 1; j <= i; j++) {
// //         row += "*";
// //     }
// //     for (let j = 1; j <= 2 * (n - i); j++) {
// //         row += " ";
// //     }
// //     for (let j = 1; j <= i; j++) {
// //         row += "*";
// //     }
// //     console.log(row);
// // }


// // let n = Number(prompt("Enter N"));

// for (let i = n; i >= 1; i--) {
//     let row = "";

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// for (let i = 2; i <= n; i++) {
//     let row = "";

//     for (let j = 1; j <= 2 * i - 1; j++) {
//         row += "*";
//     }

//     console.log(row);
// }

// function butterfly(n) {
//     for (let i = 1; i <= n; i++) {
//         let row = "";
//         for (let j = 1; j <= i; j++) row += "*";
//         for (let j = 1; j <= 2 * (n - i); j++) row += " ";
//         for (let j = 1; j <= i; j++) row += "*";

//         console.log(row);
//     }

//     for (let i = n - 1; i >= 1; i--) {
//         let row = "";

//         for (let j = 1; j <= i; j++) row += "*";
//         for (let j = 1; j <= 2 * (n - i); j++) row += " ";
//         for (let j = 1; j <= i; j++) row += "*";

//         console.log(row);
//     }
// }

// butterfly(3);

// function hourglass(n) {
//     for (let i = n; i >= 1; i--) {
//         let row = "";
//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }
//         console.log(" ".repeat(n - i) + row);
//     }

//     for (let i = 2; i <= n; i++) {
//         let row = "";

//         for (let j = 1; j <= 2 * i - 1; j++) {
//             row += "*";
//         }

//         console.log(" ".repeat(n - i) + row);
//     }
// }

// hourglass(3);

// function hourglass(n) {
//     for (let i = n; i >= 1; i--) {
//         console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//     }
//     for (let i = 2; i <= n; i++) {
//         console.log(" ".repeat(n - i) + "*".repeat(2 * i - 1));
//     }
// }

// hourglass(3);

// setTimeout(function(){
// console.log("this function 1");

// },2000)
// setTimeout(
//     function(){
// console.log("this is 2nd function");

//     },
//     1000
// )


// function un(){
//     console.log("1 is runing");
    
// }
// function run(){
//     console.log("2 is runing");
    
// }

// setTimeout(un,2000)
// setTimeout(run,1000)


// callback fnction

let fun=(callback)=>{
    console.log("callback function is runing");
    return callback
}

let fun1=()=>console.log("fun 1 is rining");

fun(fun1())

function calc(a, b, callback) {
    return callback(a, b);
}


function add(x, y) {
    return x + y;
}

function mul(x, y) {
    return x * y;
}

console.log(calc(5, 3, add));    
console.log(calc(5, 3, mul));