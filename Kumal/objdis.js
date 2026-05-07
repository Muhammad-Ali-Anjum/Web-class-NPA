let obj = {
    name: "John",
    age: 30,
    city: "New York"
};
let { name, age } = obj;
console.log(name);
console.log(age);
let { city } = obj;
console.log(city);
let { name: fullName } = obj;
console.log(fullName);
let { name: n, age: a } = obj;
console.log(n);
console.log(a);
let {...rest}=obj;
console.log(rest);
