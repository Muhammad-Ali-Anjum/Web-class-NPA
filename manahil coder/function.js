// arrow function
let display=()=>{
    console.log("Hello, World!");
}
display();
let displays=()=>console.log("Hello world");
displays();
let sqrare=(num)=>{
    return num*num;
}
console.log(sqrare(5));
let squares=num=>num*num;
console.log(squares(6));

let add=(a,b)=>{
    return a+b;
};
console.log(add(3,4));
let adds=(a,b)=>a+b;
console.log(adds(5,6));
// function recursion
let factorial=(n)=>{
    if(n===0){
        return 1;
    }
    // 5x4x3x2x1x0
    return n*factorial(n-1);
}
console.log(factorial(5));

let fibonacci=(n)=>{
    if(n<=1){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}
console.log(fibonacci(9));