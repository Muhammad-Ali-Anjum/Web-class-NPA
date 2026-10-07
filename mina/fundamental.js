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

function hi(){
    console.log("hi this is function");
    
}
hi()
// hi()

// hi()

function add(a,b){
    let sum=a+b;
    console.log(`sum of ${a} and ${b} is ${sum}`);
}
add(2,3)
add(4,5)

// function base calculation
function calculate(num1,num2,operator){
    let result;
    switch(operator){
        case '+':
            result=num1+num2;
            break;
        case '-':
            result=num1-num2;
            break;
        case '*':
            result=num1*num2;
            break;
        case '/':
            result=num1/num2;
        default:
            console.log("invlid sytex");
            return null;
            console.log(result);
            
    }}
    calculate(1,2,'+')