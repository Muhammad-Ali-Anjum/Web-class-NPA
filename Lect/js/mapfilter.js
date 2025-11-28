console.log("hi");
let arr=[12,3,46,2,4,5,6,7,5,4];

let re=arr.map((num)=>num+num);

console.log(re);

let res=arr.reduce((num,num1)=>num+num1)
console.log(res);

let filters=arr.filter((num)=> {
    return num<3;
} )

console.log(filters);

let foreachs=arr.forEach((num)=> console.log(num));
// console.log(foreachs);

let finds=arr.find((num) => num % 2 === 0)
console.log(`find value is : ${finds}`);



