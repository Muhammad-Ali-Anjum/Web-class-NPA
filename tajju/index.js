// // node js
// //  npdemon
// // console.log("this is my first program");
// // let a=12;
// // console.log(a);
// // console.log("to check");

// // data type
// // paramative non paramative data type
// // pramative data type
// // connot change the value 
// //  i.e int flooat var let const boolian
// // non paramative dta types 
// // can be change their value 
// // function , array , object etc


// // console.log(b);
// // var b=32;

// // let Sum=32;
// // console.log(Sum);
// // let sum=45;
// // console.log(sum);
// // let fatherName="abc";

// // compression operator
// // ==, <=,>=,!=
// // logical oper
// // and &&
// //  T T T
// // T  F F
// // F T F
// // F F F
// // OR 
// // T T  T
// // T F T 
// // F T  T
// // F F F 
// // NOT
// // T F 
// // F T
// // ARTHIMATIC
// // +,-. % ,/ ,*
// // Asing operator
// // =

// // if else

// let age=38;
// let death='death';

// if(age>=18 && death=="death"){
// console.log("eligbal for vote cost");


// }
// else{
// console.log("not cast vote");
    
// }

// let Name="admin";
// let pswd=12345
// if(!(Name="admin" || pswd==123456)){
//     console.log("login successfull");
    
// }
// else{
//     console.log("username and password not match");
    
// }


// student result grade
// let totalMarks=(347/550)*100
// console.log(Math.floor(totalMarks));
// console.log(Math.ceil(totalMarks));
// if (totalMarks>=80 && totalMarks<=100){
//     console.log("A+ grade");
// }
// else if(totalMarks>=70 && totalMarks<=79){
//     console.log("A grade");
// }
// else if(totalMarks>=60 && totalMarks<=69){
//     console.log("B grade");
// }
// else if(totalMarks>=50 && totalMarks<=59){
//     console.log("C grade");
// }
// else{
//     console.log("F grade");
// }

let balance=500;
let amount=1000;
if(balance<=amount){
console.log(`your current balance is ${amount} and your withdraw amount is ${balance}`);
if(amount>=10000){
    console.log("high withdraw");
}
else if(amount>=5000){
    console.log("mid level withdraw");
    
}
else{
    console.log("normal withdraw");
    
}

}
else{
    console.log("insuffecient balance");
    
}
let shiping=500000;
if (shiping>=5000){
    if(shiping>=7000 && shiping<10000)
    {
        console.log(`your spending amount is ${shiping}  10% discout`);
        
    }
    else if(shiping>=10000 && shiping<20000){
                console.log(`your spending amount is ${shiping}  20% discout`);
    }
    else if(shiping>=20000 && shiping<50000){
                console.log(`your spending amount is ${shiping}  30% discout`);

    }
    else{
       
     console.log(`your spending amount is ${shiping} discount 5% if you sepend more then you get discount`);

    }
}
else{
     console.log(`your spending amount is ${shiping} if you sepend more then you get discount`);
}






