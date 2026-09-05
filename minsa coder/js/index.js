// // console.log("hello World");
// // data type 
// // 1 paramative 
// // its value cannot change / static
// // int , fload , var , let , const , boolean
// // 2 non paraative
// //  can change the value / dynamic
// // array , function ,object
// // paramative data types
// // let var const
// var name="minsa";
// // console.log(name);
// var name="mina";
// // console.log(name);
// // let names="minsa";
// // console.log(names);
// // let names="mina";
// // console.log(names);
// // const age=12;git 
// // console.log(age);


// // opertator
// // compression operator
// // == equal to
// //  != not equal to
// //  <= less then or equal to 
// // >= greater then or equal to

// // logical
// // && and 
// // || or 
// //  ! not 

// // arthematic operator
// //  + ,- ,*, % , /
// // let a=30;
// // let b=50;
// // const rest=a+b;
// // console.log(`the sum of two number ${rest}`);

// // const per=90;
// // if(per>=80 && per<=100){
// //     console.log("A+");
// // }
// // else if(per>=70 && per<=79){
// //     console.log("A");
// // }
// // else if(per>=60 && per<=69){
// //     console.log("B");
// // }
// // else if(per>=50 && per<=59){
// //     console.log("C");
// // }
// // else if(per>=40 && per<=49){
// //     console.log("D");
// // }
// // else{
// //     console.log("Fail");
// // }

// // let num =13;
// // if(num%2==0){
// //     console.log(`The number ${num} is even`)
// // }
// // else{
// //     console.log(`The number ${num} is odd`)

// // }
// // let blnc=30000;
// // if(blnc>0){
// //     console.log(`Currently amount ${blnc}`);
// //     if(blnc>=5000){
// //         console.log(`Your transistion is too heigh`);
        
// //     }
// //     else{
// //         console.log("normal transistion");
        
// //     }
// // }

// // let a=12;
// // let b=32;
// // let oper="/"    
// // switch (oper){
// //     case '+':
// //         console.log("total sum :", a+b);
// //         break;
// //     case '*':
// //         console.log("total  :", a*b);
// //         break
// //     case '-':
// //         console.log("total sub :", a-b);
// //         break;
// //     default:
// //         console.log("invlid operator");



        
// // }

// // let page='/abou';
// // switch (page){
// //     case '/home':
// //         console.log("Home page");
// //         break;
// //     case '/login':
// //         console.log("login page");
// //         break;
// //     case '/about':
// //         console.log("about page");
// //         break;
// //     default:
// //         console.log("404 error");



        
// // }

// // for(Infinity,condataion,inc/dec){

// // }

// // for (let i=0;i<20;i++){
// //     console.log("Hi says to sorry");
    
// // }
// // for (let i=1;i<=20;i++){
// //     console.log("2" ,"X", i,"=", 2*i);
    
// // }
// // for(let i=0;i<100;i++){
// // if(i%2==0){
// //     console.log("even number : ", i);
    
// // }
// // }
// // const num=2;
// // let temp=0;
// // for(let fact=1;fact<=num;fact++){

// //     if (fact==0){
// //         return 1
// //     }
// //     else {
// //        console.log(temp=temp*(num-1));
        
// //     }
    
    
// // }
// // console.log(temp);

// // let str4 = "hello world";
// // let vowels = 0, consonants = 0;
// // for (let ch of str4.toLowerCase()) {
// //   if ("aeiou".includes(ch)) vowels++;
// //   else if (ch >= 'a' && ch <= 'z') consonants++;
// // }
// // console.log("4️⃣ Vowels:", vowels, "Consonants:", consonants);
// // let check="hi this is my test perpose";
// // let vowel=1;
// // let con=1;
// // for(let teststr of check.toLowerCase()){
// //     if("aeiou".includes(teststr)) vowel++;
// //     // if(teststr=='a' || teststr=='e'|| teststr=='i' || teststr=='o' || teststr=='u') vowel++
    
// //     else if(teststr>='a' && teststr<='z') con++;
    
    
// // }
// // console.log("vowels ",vowel,"consonant",con);

// // for(let i=0; i<10;i++){
// //     for(let j=0;j<10;j++){
// //         console.log("[",i,j,"]");
        
// //     }
// // }

// let a=10;
// // while(a<20){
// //   if(a%2==0){
// //     console.log(a);
// //   }
    
// // }
// // do{
// //     console.log(a);
// //     a++;
// // }while(a<=100)

// // console.log("Example 3: Multiplication Table 1-5");
// // for (let i = 1; i <= 5; i++) {
// //     let row = '';
// //     for (let j = 1; j <= 5; j++) {
// //         row += `${i * j}\t`;
// //     }
// //     console.log(row);
// // }
// // console.log("\n");
// for(let i=1;i<10;i++){
//     let tempt='';
//     for(let j=1;j<10;j++){
//     //    tempt=tempt + `${i*j} \t`;
//     tempt+=`${i*j} \t`

        
//     }
//     console.log(tempt);
    
// }
// for(let i=0;i<5;i++){
//     let tempt='';
//     for(let j=0;j<i;j++){
//         tempt+="* \t"
//     }
//         console.log(tempt);
// }
// for(let i=5;i>0;i--){
//     let tempt='';
//     for(let j=i;j>0;j--){
//         tempt+="* \t"
//     }
//         console.log(tempt);
// }


// array methods
// what is Array
// In JavaScript, an array is a special type of object used to store an ordered collection of multiple values under a single variable name

// let arr=[1,2,3,4,5,6,7,8,9,10,11];

// console.log(arr.length);

// for (let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

let name=["mina","minsa","ali","muhammad","amina","anjum","sara"];
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
name.pop()
name.pop()
name.pop()
name.pop()
name.pop()
name.pop()
name.pop()
console.log(name);
name.push("amina")
name.push("mina")
name.push("minsa")
console.log(name);
name.unshift("ali")
name.unshift("ahmed")
name.unshift("aslam")
console.log(name);
name.shift()
name.shift()
name.shift()
console.log(name);
let arr1=[1,2,3,4,5,6]
console.log(arr1);
let res=arr1.slice(1,3)
console.log(res);
let spl=arr1.splice(1,3)
console.log(spl);






