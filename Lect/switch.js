
let page="about"

switch(page){
    case "/":
        console.log("home page");
        break;
    case "about":
        console.log("about page");
        break;
    case "login":
        console.log("login sucess");
        break;
    default:
        console.log("page not found");     
}

// loop
for (let i=1;i<10;i++){
    console.log(i);
    
}
for (let i=1;i<10;i++){
    console.log(` ${i} x 2 = ${i*2}`);
    // console.log(i + "x"+"2"+"="+i*2);
    
    
}

let a=1

while(a<10){
    console.log(` ${a} x 2 = ${a*2}`);
    a++
    
}
let b=1
do{
console.log(` ${b} x 2 = ${b*2}`);
    b++
}while(b<10)

let c=1
while(c<10){

if(c===2){
    continue
    
}
else{
console.log(c);
c++;
}
}
