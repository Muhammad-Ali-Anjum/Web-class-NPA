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
let per =40;
if (per >=80 && per<=100){
    console.log("Grade A++");
    
}
else if (per >=70 && per <=80){
    console.log("Grade A");

}
else if (per >=60 && per <=70){
    console.log("Grade B");

}
else if(per >=50 && per <=60){
    console.log("Grade C");

}
else{
    console.log("Grade F");

}

let balance=200;
console.log("Enter 1 for balance check \nEnter 2 for recharge \n3 for package");
let input=3;
if (balance>=100){
if (input==1){
    console.log(` your balance is ${balance}`);
    
}
else if (input===2){
    console.log(`You have successfully recharge`);
    
}
else if(input==3){
    console.log("Enter 1 for weekly \nEnter 2 for Monthly ");
    packagees=1
    if(packagees==1){
        console.log("you have successfly weekly package");
        
    }
    else if (packagees==2){
        console.log("you have successfly monthly package");
    }
    else{
        console.log("please choose correct option");
    }
}
 else{
        console.log("please choose correct option");
    }


}
else{
    console.log("insuffcient balance");
    
}
