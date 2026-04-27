// // // console.log("hi this is my first program");
// // // console.log("hi this is my first program");
// // // V8 engine is a JavaScript engine developed by Google. It is used in the Chrome browser and Node.js runtime environment. V8 compiles JavaScript code into machine code, which allows for faster execution. It also includes features such as garbage collection and just-in-time (JIT) compilation to optimize performance. V8 is open source and has been widely adopted in the JavaScript community.
// // var a = 10;
// // console.log(a);

// // // data type
// // // pramative non paramative
// // // pramative data type
// // // number string boolean null undefined symbol bigInt
// // // non pramative data type
// // // object array function
// // var b = "manahil";
// // // console.log(b);

// // var b="xyz";
// // console.log(b);

// // let c = "xyz";
// // console.log(c);
// // // let c="abc";
// // // console.log(c);

// // const sm=43

// // console.log(sm);
// // // const sm=45
// // // console.log(sm);

// // // operator
// // // arthmetic operator
// // // + - * / % **
// // var x=10;
// // var y=20;
// // console.log(x+y);
// // console.log(x-y);
// // console.log(x*y);
// // console.log(x/y);
// // console.log(x%y);
// // console.log(x**y);
// // // logical operator
// // // && || !
// // var p=true;
// // var q=false;
// // console.log(p&&q);
// // console.log(p||q);
// // console.log(!p);
// // console.log(!q);
// // // T T T
// // // T F F
// // // F T F
// // // F F F
// // // or
// // // T T T
// // // T F T
// // // F T T
// // // F F F
// // // assignment operator
// // // = += -= *= /= %=
// // var m=10;
// // console.log(m);
// // m+=5;
// // // m=m+5;
// // console.log(m);
// // m-=3;
// // console.log(m);
// // m*=2;
// // console.log(m);
// // m/=4;
// // console.log(m);
// // m%=3;
// // console.log(m);

// // // comparison operator
// // // == === != !== > < >= <=
// // var a=10;
// // var b=20;
// // console.log(a==b);
// // console.log(a===b);
// // console.log(a!=b);
// // console.log(a!==b);
// // console.log(a>b);
// // console.log(a<b);
// // console.log(a>=b);
// // // console.log(a<=b);
// let age=9;
// if(age>=19){
//     console.log("vote cast");
    
// }
// let passward=123456789;
// let username ="manahil";
// if (passward===123456789 && username==="manahil"){
//     console.log("user login");
    
// }
// else{
//     console.log("failed to login");
    

// }

// let marks=185;
// if(marks>=90 && marks<=100){
//     console.log("grade A");
// }
// else if(marks>=80 && marks<90){
//     console.log("grade B"); 
// }
// else if(marks>=70 && marks<80){
//     console.log("grade C");
// }
// else if(marks>=60 && marks<70){
//     console.log("grade D");
// }
// else{
//     console.log("grade F");
// }
// let num=4;
// if(num%2==0){
//     console.log("even number");
// }
// else
// {

//     console.log("odd number");
// }

// // switch
// let day="tuesday";
// switch(day){
//     case "monday":
//         console.log("today is monday");

//         break;
//     case "tuesday":
//         console.log("today is tuesday");
//         break;
//     case "wednesday":
//         console.log("today is wednesday");
//         break;
//     case "thursday":
//         console.log("today is thursday");
//         break;
//     case "friday":
//         console.log("today is friday");
//         break;
//     case "saturday":
//         console.log("today is saturday");
//         break;
//     case "sunday":     
//        console.log("today is sunday");
//         break;  
//         default:
//             console.log("invlid ");
// }
            
// let page="/about";
// switch(page){
//     case "/home":
//         console.log("home page");
//         break;
//     case "/about":
//         console.log("about page");
//         break;
//     case "/contact":
//         console.log("contact page");
//         break;
//     default:
//         console.log("404 page not found");
// }

for(let i=1;i<=10;i++){
    console.log(i);
}
for(let j=10;j>=1;j--){
    console.log(j);
}

for(let k=1;k<=10;k++){
    if(k%2==0){
        console.log(k);
    }
}
for(let m=1;m<=10;m++){
    if(m%2!=0){
        console.log(m);
    }
}
let sum=0;
for(let n=1;n<=10;n++){
    sum+=n;
}
console.log("sum of numbers from 1 to 10 is: " + sum);
let factorial=1;
let num=5;
for(let p=1;p<=num;p++){
    factorial*=p;
}
console.log("factorial of " + num + "   is: " + factorial);
while(num>=1){
    console.log(num);
    num--;
}

while(num<=10){
    console.log(num);
    num++;
}
while(num<=10){
    if(num%2==0){
        console.log(num);
    }
    num++;
}
do{
    console.log(num);
    num++;
}while(num<=10);

// continue
for(let i=1;i<=10;i++){
    if(i%2==0){
        continue;
    }
    console.log(i);
}

for(let j=1;j<=10;j++){
    if(j==5){
        break;
    }
    console.log(j);
}
// nested loop
for(let i=1;i<=3;i++){
    for(let j=1;j<=3;j++){
        console.log("i: " + i + ", j: " + j);
    }
}

// pattern
for(let i=1;i<=5;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern+="* ";
    }
    console.log(pattern);
}

for(let i=5;i>=1;i--){
    let pattern=""; 
    for(let j=1;j<=i;j++){
        pattern+="* ";
    }
    console.log(pattern);
}

// while(true){
//     let input=prompt("Enter a number (or 'exit' to quit):");
//     if(input.toLowerCase() === "exit"){
//         console.log("Exiting the loop. Goodbye!");
//         break;
//     }
//     let number=parseInt(input);
//     if(isNaN(number)){
//         console.log("Invalid input. Please enter a valid number.");
//         continue;
//     }
//     console.log("You entered: " + number);
// }

