function sum(a,b){
    return a+b;
}
console.log(`the sum of two number: ${sum(2,4)}`);


function inf(...a){
return a+=a;
}
console.log(`the sum of two number: ${inf(2,4,4,7,8,99,3)}`);

let arr =[1,4,5,7,4,3,46,7,7]
let copy={...arr};
console.log(copy);


let arrowf=(a ,b)=> a+b;
let arrowb=(a ,b)=>{
    return a+b;
}
console.log(`the sum of a number: ${arrowf(2,4)}`);
console.log(`the sum of b number: ${arrowb(2,4)}`);


