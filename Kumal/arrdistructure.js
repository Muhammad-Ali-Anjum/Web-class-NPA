let arr=[1,2,4,5,6,6,7,8,8];
console.log(arr[0]);

let [a,b ,c]=arr;
console.log(a);

let car=["tz","tx","vits","ovel"];
// console.log(car[0]);
let [tz,tx,vits,...rest]=car;
console.log(tz);
console.log(tx,vits,rest);


