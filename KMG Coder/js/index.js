// // // // // 

// // // // // function
// // // // function name(){
// // // // console.log("server is runing....");

// // // // }

// // // // name();

// // // // function add(a,b){
// // // //     console.log(a+b);
    
// // // // }
// // // // add(10,30);

// // // // function sub(a,b){
// // // // return a-b;
// // // // }
// // // // let result=sub(20,10);
// // // // console.log(result);


// // // // arrow function
// // // // let add=(a,b)=>{
// // // //     console.log(a+b);
// // // // }
// // // // add(10,20);
// // // // let hi=()=>{
// // // //     console.log("hi");
// // // // }
// // // // hi();
// // // // let syed=()=>{
// // // //     console.log("syed");
// // // // }
// // // // syed();
// // // // let syeed=()=> console.log("syeed");

// // // // syeed();
// // // // let add=(a,b)=> {
// // // //     return a+b;
// // // // }
// // // // let result=add(10,20);
// // // // console.log(result);
// // // // console.log("==================");
// // // // let adds=(a,b)=> a+b;
// // // // let results=adds(20,30);
// // // // console.log(results);

// // // // const checkAge = (age) => age >= 18 ? 'Adult' : 'Minor';

// // // // console.log(checkAge(20)); 
// // // // console.log(checkAge(15));

// // // // let votechecker=(age)=>{
// // // //     return age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // }
// // // // console.log(votechecker(20));
// // // // console.log(votechecker(15));

// // // // let votecheck=(age)=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // console.log(votecheck(20));
// // // // console.log(votecheck(15));
// // // // let votecheck=age=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // // // console.log(votecheck(20));
// // // // console.log(votecheck(15));

// // // let votechecks=age=> {
// // //     if(age>=18){
// // //         return "you are eligible for vote";
// // //     }
// // //     return "you are not eligible for vote";
// // // };
// // // // console.log(votechecks(20));
// // // console.log(votechecks(15));


// // // Advanced Techniques with Higher Order Functions
// // function add(x) {
// //     return x + 2;
// // }
// // function mul(x) {
// //     return x * 3;
// // }
// // function compose(f, g) {
// //     return function(x) {
// //         return f(g(x));
// //   }; }
// // const addThenMul = compose(mul, add)(4);
// // // const result = addThenMul(4);
// // console.log(addThenMul); // Output: 21

// // function mul(x) {
// //     return function(y) {
// //         return x * y;
// //   };
// // }
// // var mulFn = mul(2);
// // console.log(mulFn(5));

// // function hi(kuchbifun){
// //     console.log("first function");
// //     kuchbifun()
    
// // }
// // function kuchbifun(){
// //     console.log("second function");
// // }


// // hi(kuchbifun);

// // function add(a,b){
// //     return a+b;
// // }

// // console.log(add(10,20,20,30)); // Output: 30
// function add(a,b,...args){
//     let sum=a+b; 
//     for(let i of args){
//         sum+=i;
//     }
//     return sum;
// }

// console.log(add(10,20,20,30,30));

// function sum(...numbers) {
//   return numbers.reduce((a, b) => a + b, 0);
// }

// console.log(sum(1, 2, 3, 4, 5)); 

// function multiply(...numbers) {
//     return numbers.reduce((a,b)=>a*b,1)
// }
// console.log(multiply(1, 2, 3, 4, 5));

// array
let a=[1,3,4,5];
console.log(a);
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a);

a.push(6);
a.push(7);
// a.unshift(0);
// a.unshift(-1);
// a.unshift(2);
console.log(a);
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// a.pop();
// console.log(a);

// a.map((x)=>{
//     console.log(x);
// },1);
// let arr=a.reduce((acc,curr)=>{
//     return acc+curr;
// },0);

// console.log(arr);

// a.slice(1,3);
// console.log(a);
// a.splice(4,2);
// console.log(a);
// let b=a.slice(1,3);
// console.log(b);
// let c=a.splice(1,3);
// console.log(c);
// console.log(a);

a.map((x)=>{
    console.log(x);
});

console.log(a);

let val=a.reduce((acc,curr)=>{
    console.log(acc,curr);
    return acc+curr;
},0);

console.log(`the sum of array is ${val}`);

a.forEach((x)=>{
    console.log(`the value is ${x}`);
}
);
let fil=a.filter((x)=>{
    return x%2==0;
});
console.log(fil);

let sum=a.some((x)=>{
    return x%2==0;
});
console.log(sum);

let er=a.every((x)=>{
    return x%2==0;
});
console.log(er);

ary=a.sort((a,b)=>{
    return a-b;
});
console.log(ary);

let car=["tsla","bmw","vits","honda","colra" ,"tx","tz"]
// console.log(car[0]);
let [tsal,bmw,vits,honda,colre,...  ]=car;

console.log(vits);
console.log(remingcar);


