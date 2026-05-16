// Array higer order
let arr=[1,2,34,5,6,7,8,76,3];
let sum =arr.reduce(
    (acumlator, currentvalue)=>{
        return acumlator + currentvalue;

    }
);
console.log(sum);

let sum2 =arr.reduce(
    (acumlator, currentvalue)=>{
        return acumlator * currentvalue;
    });
console.log(`product ${sum2}`);

// mapp
let arr1=["manahil","coder","npa"];
let arr2=arr1.map(
    (value)=>{
        return value.toUpperCase();
    }
);
// console.log(arr2);
// let arr3=arr1.map(val=>val.toUpperCase);
// console.log(arr3);
let arr4=[2,3,4,5]
let sqr=arr4.map(val=>val*val);
console.log(sqr);
let filtr=arr4.filter(val=>val%2==0);
console.log(filtr);

let finds=arr4.find(val=>val===2);
console.log(finds);
