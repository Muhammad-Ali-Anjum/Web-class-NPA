// console.log("hi programer");


// // js data type
// // let 
// // var
// // const
// var a=30;
// //  console.log(a);
// var a=45;
//  console.log(a);
// // es6

// let b=34;
// console.log(b+true);



// let v="ali";
// console.log(v);
// const add=34;
// console.log(add)
// console.log("hi");


// oprators 
// = asgn
// == equal oprators
// === equal typecosting
// < less then
// > grater then
// <=>=

// logical gate

// && and opr

// T T => T
// T F => F
// F T =>F

// || or opr
// T T T
// T F T
// F T T
// F F F

// ! not opr
// T F 
// F T

// let c=1;
// console.log(c*false);
 

// const mark=500;

// if (mark>=30 && mark<=50){
//     console.log(mark);
    
// }
// else{
//     console.log("invlid");
    
// }


// if(mark>=40 || mark<=50){
//     console.log("pass");
    
// }
// else{
//     console.log("fail");
    
// }

// let user="ali"
// if (user=="ali"){
//     console.log("ali is here");
    
// }
// else{
//     console.log("not match the name");
    
// }
// let pass =23242
// if (pass==1234){
//  console.log("login");
 
// }
// else{
//     console.log("incorrect password");
    
// }


// let a=3
// let b=4;
// let arr=[1,2,4,56,6,77,88,8,888,7,65,33,4,66]

// for(let i =5;i<=10;i++){
//     if (i==6 || i==7){
//         // break
// continue
//     }
//     console.log(i);
// }

// for(let i=0; i<10;i++){
//     for(let j=0;j<i;j++)
//     {
//         // if(i===j){
//         //     console.log("ji");

//         // }
//         console.log("hi");
        
//     }
// }
// for (let i = 1; i <= 20; i++) { // Outer loop = rows
//     let row = '';
//     for (let j = 1; j <= 10; j++) { // Inner loop = columns
//         row =row + `${i * j}\t`; // Multiply current row and column
//     }
//     console.log(row); // Print complete row after inner loop finishes
// }
// console.log("\n");

// for (let i = 1; i <= 5; i++) {
//     let row = '';
//     for (let j = 1; j <= i; j++) {
//         row += '* ';
//     }
//     console.log(row);
// }
// console.log("\n");

// let n = 4; // Size of square
// for (let i = 1; i <= n; i++) { // Outer loop = rows
//     let row = '';
//     for (let j = 1; j <= n; j++) { // Inner loop = columns
//         row += '* ';
//     }
//     console.log(row); // Print each row
// }
// console.log("\n");


// let m=7;
//     for (var i = 0; i < m; i++) {
//         var row = "";
//         for (var j = 0; j < m; j++) {
//             if (i == 0 || m == m-1 || j == 0 || j == m-1 || i == j || j == m-i-1) {
//                 row += "* ";
//             } else {
//                 row += "  ";
//             }
//         }
//         console.log(row);
//     }


// let a =1;
// while(a<=5){
  
//   let b=3
//     while(b<a){
//         console.log(b,a);
//         b++
        
//     }
//     a++
    
      
// }
// let a=2;
// do{
//     a++
// console.log(a);


// }while(a<10)

let opr="-";
let a=3;
let b=6;
switch(opr){
    case "+":
        console.log(a+b);
        break
    case "-":
        console.log(a-b);
        break
        default:
            console.log("error");
            
                

}