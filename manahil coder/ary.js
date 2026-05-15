let arr=[1,2,3,4,5];
console.log(arr);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

arr.push(6);
arr.push(7);
console.log(arr);
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log(arr);
arr.unshift(0);
arr.unshift(-1);
arr.unshift(-2);
arr.shift();
arr.shift();

console.log(arr);

arr.splice(1,0,1.5);
console.log(arr);
arr.splice(2,1);
console.log(arr);
arr.reverse();
console.log(arr);
