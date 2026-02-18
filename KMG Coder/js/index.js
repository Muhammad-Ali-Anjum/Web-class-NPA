// // // 

// // // function
// // function name(){
// // console.log("server is runing....");

// // }

// // name();

// // function add(a,b){
// //     console.log(a+b);
    
// // }
// // add(10,30);

// // function sub(a,b){
// // return a-b;
// // }
// // let result=sub(20,10);
// // console.log(result);


// // arrow function
// // let add=(a,b)=>{
// //     console.log(a+b);
// // }
// // add(10,20);
// // let hi=()=>{
// //     console.log("hi");
// // }
// // hi();
// // let syed=()=>{
// //     console.log("syed");
// // }
// // syed();
// // let syeed=()=> console.log("syeed");

// // syeed();
// // let add=(a,b)=> {
// //     return a+b;
// // }
// // let result=add(10,20);
// // console.log(result);
// // console.log("==================");
// // let adds=(a,b)=> a+b;
// // let results=adds(20,30);
// // console.log(results);

// // const checkAge = (age) => age >= 18 ? 'Adult' : 'Minor';

// // console.log(checkAge(20)); 
// // console.log(checkAge(15));

// // let votechecker=(age)=>{
// //     return age>=18? "you are eligible for vote":"you are not eligible for vote";
// // }
// // console.log(votechecker(20));
// // console.log(votechecker(15));

// // let votecheck=(age)=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // console.log(votecheck(20));
// // console.log(votecheck(15));
// // let votecheck=age=> age>=18? "you are eligible for vote":"you are not eligible for vote";
// // console.log(votecheck(20));
// // console.log(votecheck(15));

// let votechecks=age=> {
//     if(age>=18){
//         return "you are eligible for vote";
//     }
//     return "you are not eligible for vote";
// };
// // console.log(votechecks(20));
// console.log(votechecks(15));


// Advanced Techniques with Higher Order Functions
function add(x) {
    return x + 2;
}
function mul(x) {
    return x * 3;
}
function compose(f, g) {
    return function(x) {
        return f(g(x));
  }; }
const addThenMul = compose(mul, add)(4);
// const result = addThenMul(4);
console.log(addThenMul); // Output: 21

function mul(x) {
    return function(y) {
        return x * y;
  };
}
var mulFn = mul(2);
console.log(mulFn(5));

function hi(kuchbifun){
    console.log("first function");
    kuchbifun()
    
}
function kuchbifun(){
    console.log("second function");
}


hi(kuchbifun);
