let array=[1,23,4,5,6,7,8,9,10];
// for(let i=0;i<array.length;i++){
//     console.log(array[i]);
// }

console.log(array);
// push pop shift unshift
array.push(11);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.unshift(0);
console.log(array);
// higer order function
array.forEach((value,index)=>{
    console.log(index,value);
}
);
let sum=array.reduce((accumulator,currentvalue)=>{
    return accumulator+currentvalue;
}
);

console.log(`Sum: ${sum}`);
let filterarray=array.filter((value)=>{
    return value>5;
}
);
console.log(filterarray);
let maparray=array.map((value)=>{
    return value*2;
}
);
console.log(`Map Array: ${maparray}`);

let checkarray=array.at(-1); // last element
console.log(`Check Array: ${checkarray}`);
let index=array.indexOf(5);
console.log(`Index: ${index}`);
let find=array.find((value)=>{
    return value>5;
});
console.log(`Find: ${find}`);
let findindex=array.findIndex((value)=>{
    return value>5;
}
);
console.log(`Find Index: ${findindex}`);
let includes=array.includes(5);
console.log(`Includes: ${includes}`);
let join=array.join("-");
console.log(`Join: ${join}`);
let slice=array.slice(2,5);
console.log(`Slice: ${slice}`);
let splice=array.splice(2,3);
console.log(`Splice: ${splice}`);
console.log(`Array after Splice: ${array}`);
console.log(array);

let sort=array.sort((a,b)=>{
    return a-b;
});
console.log(`Sort: ${sort}`);

let reverse=array.reverse();
console.log(`Reverse: ${reverse}`);
let concat=array.concat([11,12,13]);
console.log(`Concat: ${concat}`);
let flat=array.flat();
console.log(`Flat: ${flat}`);

let fill=array.fill(0,2,5);
console.log(`Fill: ${fill}`);
let copy=array.copyWithin(2,0,2);
console.log(`Copy: ${copy}`);
let every=array.every((value)=>{
    return value>0;
}   
);
console.log(`Every: ${every}`);
