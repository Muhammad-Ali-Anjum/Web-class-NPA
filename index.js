console.log("hi");
let a=12;
let b=34;
let oper="/";
switch(oper){
    case "+":
        let sum=a+b;
        console.log(`sum of two value ${sum}`);
        break;
    case "-":
         let sub=a-b;
        console.log(`differnt of two value ${sub}`);
        break;
    default:
        console.log("Enter correct operatr");   
}


// for(let i=0; i<10;i++){
//   if (i==4 || i==6){
//     continue;
//   }
// console.log(i);
// }
for(let i=0; i<10;i++){
for(let j=0; j<i;j++){
    console.log("\n ");
    
}
console.log("*");
}


// console.log("while loop");


// let n=0
// while(n<10){

//     console.log(n);
//     n++ 
// }


function sum(a, b){
return a+b;
}
let g= sum(6,4)
console.log("sum of function",g);
