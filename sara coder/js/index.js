// // // // // console.log("hi js");
// // // // // console.log("this is first program");
// // // // // console.log("nodmon runing...........");

// // // // // // js
// // // // // // 1995
// // // // // // es6
// // // // // data type
// // // // var a=20;
// // // // var a=40
// // // // console.log(a);
// // // // let b="xyz";
// // // // {
// // // //     let b="abc"
// // // // }
// // // // console.log(b);
// // // // const c=32;
// // // // console.log(c);
// // // // // oper
// // // // =
// // // // arth
// // // // +-*%
// // // // <=
// // // // >=
// // // // <
// // // // >
// // // // !
// // // // logical
// // // // &&
// // // // T T T
// // // // T F F
// // // // F T F
// // // // F F F
// // // // OR ||
// // // // T T T
// // // // T F T
// // // // F T T
// // // // F F F
// // // // NOT
// // // // !
// // // // T F
// // // // F T

// // // let a =43;
// // // let b=54;


// // // let result=b+a;
// // // console.log("sum of two value",result);
// // // let re=a-b;
// // // console.log(`the sub two value ${re}`);

// // // console.log(true*1);
// // // // console.log(true-4);

// // // let name="abc";
// // // let pswd=1234;
// // // if(name=="abcs" && pswd==1234){
// // // console.log("login sucessful");

// // // }
// // // else{
// // //     console.log("username not valid");
    
// // // }
// // let per=50;
// // if(per>=80 && per<=100){
// //     console.log("Grad A+");
    
// // }
// // else if(per>=70 && per<80){
// //     console.log("Grad A");
// // } 
// // else{
// //     console.log("0");
    
// // }


// // let oper="-";
// // switch(oper){
// //     case "+":
// //         console.log("add");
// //         break;
// //     case "-":
// //         console.log("sub");
// //         break;
// //     default:
// //         console.log("invlid");
            
// // }
// // let age=29

// // let a=age>=18?"Can vote":"cannot cost vote"
// // console.log(a)

// // loop
// // type 
// // for 
// // while
// // do while
// //  for each
// //  for in 
// //  for at
// //  Map
// //  reduce 
// //  filter

// // for(initilization ,condation, incre/dec){
// //     block of code 
// // }
// for(let i=1;i<10;i++){
//     // console.log(`2 x ${i} = ${i*2}`);
//     // console.log("2"+"x"+i+"="+i*2);
//     // if (i==3){
//     //     continue
//     // }
//     if (i%2==1){
//         console.log(i);
//     }
    
// }
// console.log("============while loop=========");

// let a=2
// // while(a<10){
// // console.log(a);
// //   a++;
// // }
// console.log("============do while loop============");

// do{
//     console.log(a);
//   a++;
// }while(a<4)

// let b=1
// let c=1
// let sum=c+ ++c
// console.log(sum);
// let sm=b+b++
// console.log(sm);

// Array
// let arr1=[1,6,3,23,6,8,53];
// console.log(`lenth of array ${arr1.length}`);

// console.log(arr1[0]);
// console.log(arr1[2]);
// arr1.push(100);
// arr1.push(10);
// arr1.push(20);
// console.log(`lenth of array ${arr1.length}`);


// console.log(arr1);
// arr1.pop()
// arr1.pop()
// arr1.pop()
// arr1.pop()
// arr1.pop()
// arr1.pop()

// console.log(`lenth of array ${arr1.length}`);
// console.log(arr1);
// arr1.shift()
// arr1.shift()
// console.log(`lenth of array ${arr1.length}`);
// console.log(arr1);
// arr1.unshift(21)
// console.log(`lenth of array ${arr1.length}`);
// console.log(arr1);


// let arr1=["admin","teacher","student"];
// console.log(arr1[0]);
// console.log(arr1[1]);
// arr1.push("Editer")
// arr1.push("staff")
// console.log(arr1);
// arr1.pop()
// console.log(arr1);
// arr1.unshift("id")

// console.log(arr1);
// arr1.shift()
// console.log(arr1);

// function run(){
//     console.log("backend is runing");
    
// }
// run()

// let runing=()=>{
//     console.log("API is runing");

// }
// runing()

// let sum=(a,b)=>{
// console.log(a+b);

// }
// sum(2,4)

// let sums=(a,b)=> console.log(a+b);
// sums(2,3)
// let sm=(a,b)=>{
//     return a+b
// }
// console.log(sm(2,3));

// let sms=(a,b)=> a+b;
// console.log(sms(1,1));

// let sq=a=> a*a;
// console.log(sq(2));


// let sum=(a,b,...c)=>{
//     console.log(a,b,c);
    
// }
// sum(1,2,3,3,5,3,[1,3,5,6,7])

// let arr=["vits","tota","OD","Primo"];
// let [vits,tota,od,...rest]=arr;
// console.log(arr[0]);
// console.log(vits);
// console.log(od);

// let arra=[23,43,32,43]
// console.log(arra.concat(arr));


// let arr=["Iphone","techno","opo","infinix","redmi"];
// let product=arr.map(product=>product)
// console.log(product);
// let arr1=[1100,200,400,300,2000]
// let filt=arr1.filter(index=>index>400)
// console.log(filt);
// let search=arr.filter(search=>search.includes("ipad"))
// console.log(search);
// let find=arr.find(find=>find=="Iphone")
// console.log(find);

// let reduce=arr1.reduce((sum,price)=>sum+price,0)
// console.log(reduce);
// let forech=

// object
// let obj={
//     name:"sara",
//     age:18,
//     location:{
//         zipcode:16100,
//         steet:"xyz123",
//         country:"pakistan"
//     }
// }
// console.log(obj.name);
// console.log(obj);
// console.log(obj.location.country);
// let obj2={
//     name:"rukhsana",
//     age:19,
//     country:["Pk","IN","US","UK"],
//     province:{
//         state:[
//             {
//             state:{
//                 provinces:["lahore","GB"],
//                 zipcode:[122002,16100],
//                 steet:"acbd123"
//             }
//         },
//           {
//             state:{
//                 provinces:["lahore","GB"],
//                 zipcode:[122002,16100],
//                 steet:"acbd123"
//             }
//         }
//     ]
//     }
// }

// console.log(obj2);

// console.log(obj2.province.state);
// obj2.province.state.map(e=> console.log(e)
// )


// console.log("+++++++++++++card+++++++++++++++++");


// // Sample Products
// const products = [
//     { id: 1, name: "Laptop", price: 1000 },
//     { id: 2, name: "Phone", price: 500 },
//     { id: 3, name: "Headphones", price: 100 },
// ];

// // Shopping Cart
// let cart = [];

// // Cart Operations
// const cartAction = (action, productId = null, quantity = 1) => {
//     const findProduct = id => products.find(p => p.id === id);

//     switch(action){
//         case "add":
//             if (!productId) return console.log("Select product to add");
//             const product = findProduct(productId);
//             if (!product) return console.log("Product not found");
//             const existing = cart.find(p => p.id === productId);
//             existing ? existing.quantity += quantity : cart.push({ ...product, quantity });
//             console.log(`${product.name} added (Qty: ${quantity})`);
//             break;

//         case "remove":
//             if (!productId) return console.log("Select product to remove");
//             cart = cart.filter(p => p.id !== productId);
//             console.log("Product removed from cart");
//             break;

//         case "update":
//             if (!productId) return console.log("Select product to update");
//             const item = cart.find(p => p.id === productId);
//             if (!item) return console.log("Product not in cart");
//             item.quantity = quantity;
//             console.log(`Updated ${item.name} quantity to ${quantity}`);
//             break;

//         case "checkout":
//             if (!cart.length) return console.log("Cart is empty");
//             console.log("🛒 Cart Summary:");
//             const total = cart.reduce((sum, p) => {
//                 console.log(`${p.name} x ${p.quantity} = $${p.price * p.quantity}`);
//                 return sum + p.price * p.quantity;
//             }, 0);
//             console.log(`Total: $${total}`);
//             cart = [];
//             console.log("✅ Checkout complete!");
//             break;

//         default:
//             console.log("Invalid action! Use: add, remove, update, checkout");
//     }
// };

// // ✅ Example Usage
// cartAction("add", 1);
// cartAction("add", 5);
// cartAction("add", 2, 2);
// cartAction("update", 2, 3);
// cartAction("remove", 2);
// cartAction("checkout");
// console.log(cart);

// console.log("++++++++++++++++++++++++++++");
// let obj3={
//     name:"sara",
//     age:20,
//     address:"bcs",
//     zipcode:1234
// }

// console.log(obj3.name);
// let {name,age,address,...seprat}=obj3;
// console.log(name);
// console.log(age);
// console.log(seprat);




let obj={
    name:"sara",
    age:20,
    address:"bcs",
    zipcode:1234,
    country:"pakistan"
}
let {name,age,address,zipcode,...rest}=obj;
console.log(name);
console.log(age);
console.log(address);
console.log(zipcode);
console.log(rest);
