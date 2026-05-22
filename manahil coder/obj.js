// object 
let obj={
    name:"manahil",
    age:20
}
console.log(obj.name);
console.log(obj.age);
obj.name="rukhsana";
console.log(obj.name);
delete  obj.age;
console.log(obj.age);
obj.age=32;

console.log(obj.age);
let arr=[
    {
        id:1,
        name:"manahil",
        age:20
    },
    {
        id:2,
        name:"npa",
        age:22  
    },
    {
        id:3,
        name:"coder",
        age:21
    }

]
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);
// distructure
let [...id]=arr;
console.log(id);

let obj2={
    name:"manahil",
    age:20,
    state:["punjab","sindh","balochistan","khyber pakhtunkhwa","gilgit baltistan","azad kashmir"]
}

console.log(obj2.state[0]);
