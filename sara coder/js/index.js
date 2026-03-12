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


let sum=(a,b,...c)=>{
    console.log(a,b,c);
    
}
sum(1,2,3,3,5,3,[1,3,5,6,7])

let arr=["vits","tota","OD","Primo"];
let [vits,tota,od,...rest]=arr;
console.log(arr[0]);
console.log(vits);
console.log(od);

let arra=[23,43,32,43]
console.log(arra.concat(arr));



