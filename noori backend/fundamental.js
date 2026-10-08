// // let array=[1,23,4,5,6,7,8,9,10];
// // // for(let i=0;i<array.length;i++){
// // //     console.log(array[i]);
// // // }

// // console.log(array);
// // // push pop shift unshift
// // array.push(11);
// // console.log(array);
// // array.pop();
// // console.log(array);
// // array.shift();
// // console.log(array);
// // array.unshift(0);
// // console.log(array);
// // // higer order function
// // array.forEach((value,index)=>{
// //     console.log(index,value);
// // }
// // );
// // let sum=array.reduce((accumulator,currentvalue)=>{
// //     return accumulator+currentvalue;
// // }
// // );

// // console.log(`Sum: ${sum}`);
// // let filterarray=array.filter((value)=>{
// //     return value>5;
// // }
// // );
// // console.log(filterarray);
// // let maparray=array.map((value)=>{
// //     return value*2;
// // }
// // );
// // console.log(`Map Array: ${maparray}`);

// // let checkarray=array.at(-1); // last element
// // console.log(`Check Array: ${checkarray}`);
// // let index=array.indexOf(5);
// // console.log(`Index: ${index}`);
// // let find=array.find((value)=>{
// //     return value>5;
// // });
// // console.log(`Find: ${find}`);
// // let findindex=array.findIndex((value)=>{
// //     return value>5;
// // }
// // );
// // console.log(`Find Index: ${findindex}`);
// // let includes=array.includes(5);
// // console.log(`Includes: ${includes}`);
// // let join=array.join("-");
// // console.log(`Join: ${join}`);
// // let slice=array.slice(2,5);
// // console.log(`Slice: ${slice}`);
// // let splice=array.splice(2,3);
// // console.log(`Splice: ${splice}`);
// // console.log(`Array after Splice: ${array}`);
// // console.log(array);

// // let sort=array.sort((a,b)=>{
// //     return a-b;
// // });
// // console.log(`Sort: ${sort}`);

// // let reverse=array.reverse();
// // console.log(`Reverse: ${reverse}`);
// // let concat=array.concat([11,12,13]);
// // console.log(`Concat: ${concat}`);
// // let flat=array.flat();
// // console.log(`Flat: ${flat}`);

// // let fill=array.fill(0,2,5);
// // console.log(`Fill: ${fill}`);
// // let copy=array.copyWithin(2,0,2);
// // console.log(`Copy: ${copy}`);
// // let every=array.every((value)=>{
// //     return value>0;
// // }   
// // );
// // console.log(`Every: ${every}`);

// // array distructuring
// let array=[1,2,3,4,5,6,7,8,9,10];
// let [a,b,c,d]=array;
// console.log(a,b,c,d);

// let array1=[1,2,3,4,5,6,7,8,9,10];
// let [e,f,...rest]=array1;
// console.log(`E: ${e} F: ${f} Rest: ${rest}`);

// let array2=[1,2,3,4,5,6,7,8,9,10];
// let [g,,h,...rest1]=array2;
// console.log(`G: ${g} H: ${h} Rest: ${rest1}`);
// // distrructuring array with higher order function
// let array3=[1,2,3,4,5,6,7,8,9,10];
// array3.forEach((value,index)=>{
//     let [i,j]=[value,index];
//     console.log(`I: ${i} J: ${j}`);
// }
// );

// let array4=[1,2,3,4,5,6,7,8,9,10];
// array4.map((value,index)=>{
//     let [k,l]=[value,index];
//     console.log(`K: ${k} L: ${l}`);
// }
// );



// object
// let obj={
//     name:"Tajju",
//     age:22
// }

// console.log(obj.name);
// console.log(obj.age);
// console.log(obj);
// // nested object
// let obj1={
//     name:"Tajju",
//     age:22,
//     address:{
//         city:"skardu",
//         country:"Pakistan"
//     }
// }
// console.log(obj1.address.city);
// console.log(obj1.address.country);
// // console.log(obj1.address.country);
// // object with array

// let obj2={
//     name:"Tajju",
//     age:22,
//     hobbies:["reading","writing","coding","sports","music"]
// }
// console.log(obj2.hobbies[0]);
// console.log(obj2.hobbies[1]);
// console.log(obj2.hobbies[2]);
// let [firstHobby,secondHobby,thirdHobby]=obj2.hobbies;
// console.log(firstHobby);
// console.log(secondHobby);
// console.log(thirdHobby);
// let [...restHobbies]=obj2.hobbies;
// console.log(restHobbies);

// tradictional function
// function add(a,b){
//     return a+b;
// }
// console.log(add(3,4));
// console.log(add(44,4));
// // functional component base code 
// // type of function
// // arrow fucntion
// let sum=()=>{
//     console.log("hi this is arrow function")
// }
// sum()

// let sums=()=> console.log("hi this is arrow function");
// sums()

// function sqr(a){
//     console.log(a*a);
    
// }
// sqr(2)

// let sqrs=a=>console.log(a*a);
// sqrs(4)

// let sqrs1=(a,b)=>console.log(a*b);
// sqrs1(4,5)
// let sqrs2=(a,b)=>a*b;
// console.log(sqrs2(4,5));

// let sqr=a=>console.log(a*a);
// sqr(3);
// // product cards calculation arrow function with array

// let products=[
//     {name:"product1",price:100},
//     {name:"product2",price:200},
//     {name:"product3",price:300},
//     {name:"product4",price:400},
//     {name:"product5",price:500},
//     {name:"product5",price:500},
//     {name:"product5",price:500},

// ];
// let totalPrice=products.reduce((accumulator,currentvalue)=>{
//     return accumulator+currentvalue.price;
// }
// );
// console.log(`Total Price: ${totalPrice}`);

// let totalPrice1=products.reduce((accumulator,currentvalue)=>accumulator+currentvalue.price,0);
// console.log(`Total Price: ${totalPrice1}`);

// let discountedPrice=products.map((product)=>{
//     return {name:product.name,price:product.price*0.9};
// }
// );
// console.log(`Discounted Prices: ${JSON.stringify(discountedPrice)}`);
// within object function
// let obj={
//     id:1,
//     name:"abc",
//     age:20,
//     adress:{
//         countery:['pk','us','uk'],
//         city:['kpk','GB','panjab'],
//         zip:[12312,2424,4334,5355,4344]
//     },
//     fn:function(){
//         console.log(`name ${this.name} age ${this.age} id ${this.id}`);
        
//     }

// }
// obj.fn();

// recusive function



// function factorial(n) {
//     // Base Case
//     if (n === 1 || n === 0) {
//         return 1;
//     }
//     // Recursive Case
//     return n * factorial(n - 1);
// }
// console.log(factorial(4)); 
// function factorial(num){
//     if (num===1 || num===0){
//         return 1;
//     }
//     return num* factorial(num-1);
// }
// console.log(factorial(4));

// callback function


// The outer function accepts a callback function as its third argument
// function calculate(num1, num2, operationCallback) {
//     return operationCallback(num1, num2);
// }
// const add = (a, b) => a + b;
// const multiply = (a, b) => a * b;
// console.log(calculate(5, 3, add));     
// console.log(calculate(5, 3, multiply));

// function calculate(num1, num2, num3,callbackfun){
// return callbackfun(num1, num2,num3);
// }
// const add=(a,b,c)=>a+b+c;
// const sub=(a,c,s)=>a-c-s;
// console.log(calculate(3,2,3,sub));

// let per=100;
// if (per>=80 && per<=100){
//     console.log("Grad A+");
    
// }
// else if(per>=70 && per<80){
//     console.log("Grad A");
    
// }
// else if (per >=60 && per <70){
//     console.log("Grad B");
    
// }
// else if (per>=50 && per <60){
// console.log("Grad C");

// }
// else{
//     console.log("Grad F");
    
// }

// let a =3;
// if (a%2==0){
//     console.log("even number");
    
// }
// else{
//     console.log("odd number");
    
// }


// let page="/about";
// switch (page){
//     case '/home':
//         console.log("home page ");
//         break;
//     case '/about':
//         console.log("About page");
//         break;
//     case '/login':
//         console.log("login page");
//         break
//     default:
//         console.log("404 error");
        
        
        
        
// }
// let b=3;
// let c=5;
// let oper="+";
// switch (oper){
//     case '+':
//         console.log("sum of two value",b+c);
//         break;
//     case '/about':
//         console.log("About page");
//         break;
//     case '/login':
//         console.log("login page");
//         break
//     default:
//         console.log("404 error");
        
        
        
        
// }

// settimeout
// setTimeout(()=>{
//     console.log("this is runing 1st code");
    
// },2000)
// setTimeout(()=>{
//     console.log("this is runing 2nd code ");
    
// },1000)


// function orderStatus(pizza, status) {
//   console.log(`Your ${pizza} pizza is ${status}!`);
// }

// setTimeout(orderStatus, 500, "Pepperoni", "panding\ll");

// let mypromis=new Promise((res,rej)=>{
//     let check=false;
//     if(check){
//         res("function resole")
//     }
//     else{
//         rej("function is rejct")
//     }
// });

// mypromis.then(resole=> console.log(resole))
// .catch(rejcted=> console.error(rejcted)
// );

// async function fetchUserData() {
//   const url = 'https://typicode.com';
  
//   try {
//     const response = await fetch(url);
    
//     // Always check response.ok (status 200-299) before parsing
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
    
//     const data = await response.json(); // Parses the response body as JSON
//     console.log(data);
//   } catch (error) {
//     console.error('Fetch failed:', error.message); // Catches network errors
//   }
// }

// fetchUserData();

// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);


// fetch('https://dummyjson.com/products/1')
// .then(res=>res.json())
// .then(res=>console.log(res))
// .catch(err=>console.error(err))

// Promises
// let myPromise = new Promise((resolve, reject) => {
//     let check = true;
//     if (check) {
//         resolve("Promise resolved successfully");
//     } else {
//         reject("Promise rejected");
//     }
// });

// // myPromise
// //     .then(result => console.log(result))
// //     .catch(error => console.error(error));
// // promise with object
// let myPromise2 = new Promise((resolve, reject) => {
//     let obj = {
//         name: "norri",
//         age: 22,
//         city: "Skardu"
//     };
//     let check = true;
//     if (check) {
//         resolve(obj);
//     } else {
//         reject("Failed to resolve promise");
//     }
// });

// myPromise2
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// // product cardlisting with promise
// let products = [
//     { name: "product1", price: 100 },
//     { name: "product2", price: 200 },
//     { name: "product3", price: 300 },
//     { name: "product4", price: 400 },
//     { name: "product5", price: 500 },
// ];

// let productPromise = new Promise((resolve, reject) => {
//     let check = true;
//     if (check) {
//         resolve(products);
//     } else {
//         reject("Failed to resolve promise");
//     }
// });

// productPromise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));
// // product calculation with promise
// let productCalculationPromise = new Promise((resolve, reject) => {
//     let totalPrice = products.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.price;
//     }, 0);
//     let check = true;
//     if (check) {
//         resolve(totalPrice);
//     } else {
//         reject("Failed to resolve promise");
//     }
// });

// productCalculationPromise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));

// // refreshing the product calculation promise to include a discount calculation:
// let productDiscountCalculationPromise = new Promise((resolve, reject) => {
//     let totalPrice = products.reduce((accumulator, currentValue) => {
//         return accumulator + currentValue.price;
//     }, 0);
//     let discount = totalPrice * 0.1;
//     let finalPrice = totalPrice - discount;
//     let check = true;
//     if (check) {
//         resolve(finalPrice);
//     } else {
//         reject("Failed to resolve promise");
//     }
// });

// productDiscountCalculationPromise
//     .then(result => console.log(result))
//     .catch(error => console.error(error));



// promise with dummy api real data

// function fetchingData(){
//     return new Promise((resolve,reject)=>{
//         // https://dummyjson.com/products
//         fetch('https://dummyjson.com/products')
//         .then(res=>res.json())
//         .then(res=>console.log(res))
//         .catch(err=>console.error(err))
//     }
//             )
// }
// fetchingData();


// asign awatit function  api

// async function fetchData() {
//     try {
//         const response = await fetch('https://dummyjson.com/products');
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Fetch failed:', error.message);
//     }
// }
// fetchData();
// async function fetchData() {
//     try{
//         const response = await fetch('https://dummyjson.com/prodcts');
//     if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();
//     console.log(data);
//     }
//     catch (error) {
//         console.error('Fetch failed:', error.message);
//     }
// }
// fetchData()

// let cart = [];

// async function addToCart(product) {
//   try {
//     console.log("Adding product...");

//     const response = await fakeApiRequest(product);

//     cart.push(response);

//     console.log("Product added successfully!");
//     console.log("Cart:", cart);

//   } catch (error) {
//     console.error("Failed to add product:", error);
//   }
// }

// function fakeApiRequest(product) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(product);
//     }, 1000);
//   });
// }


// addToCart({
//   id: 1,
//   name: "Laptop",
//   price: 800,
//   quantity: 1
// });


const products = [
  { id: 1, name: "Laptop", price: 120000 },
  { id: 2, name: "Phone", price: 80000 },
  { id: 3, name: "Headphones", price: 12000 },
  { id: 4, name: "Smart Watch", price: 18000 }
];

let cart = [];


// ADD TO CART
async function addToCart(productId) {
  try {
    const product = await getProduct(productId);

    const existingProduct = cart.find(
      item => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity++;
    } else {
      cart.push({
        ...product,
        quantity: 1
      });
    }

    console.log("Added to cart:", product.name);
    console.log("Cart:", cart);

  } catch (error) {
    console.log("Error:", error.message);
  }
}


// GET PRODUCT
async function getProduct(productId) {

  const product = products.find(
    product => product.id === productId
  );

  if (!product) {
    throw new Error("Product not found");
  }

  return product;
}


// REMOVE FROM CART
async function removeFromCart(productId) {

  const product = await getProduct(productId);

  cart = cart.filter(
    item => item.id !== product.id
  );

  console.log("Removed:", product.name);
  console.log("Cart:", cart);
}


// INCREASE QUANTITY
async function increaseQuantity(productId) {

  const product = cart.find(
    item => item.id === productId
  );

  if (!product) return;

  product.quantity++;

  console.log(cart);
}


// DECREASE QUANTITY
async function decreaseQuantity(productId) {

  const product = cart.find(
    item => item.id === productId
  );

  if (!product) return;

  product.quantity--;

  if (product.quantity <= 0) {
    await removeFromCart(productId);
  }

  console.log(cart);
}


// GET CART TOTAL
async function getCartTotal() {

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return total;
}


// CHECKOUT
async function checkout() {

  if (cart.length === 0) {
    console.log("Cart is empty");
    return;
  }

  const total = await getCartTotal();

  console.log("Order placed!");
  console.log("Total:", total);

  cart = [];
}


// TEST
await addToCart(1);
await addToCart(1);
await addToCart(3);

console.log("Total:", await getCartTotal());

await decreaseQuantity(1);

console.log("Final Cart:", cart);
