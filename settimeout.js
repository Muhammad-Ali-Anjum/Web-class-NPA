


function sum(){
    console.log("the fun is run 1");
    
}
sum()
function sums(){
    console.log("the fun is run 2");
    
}
sums();
setTimeout(() => {
    console.log("the function 1 is run");
    
}, 3000);


setTimeout(() => {
    console.log("the inam function is run");
    
}, 2000);

function showMessage(name) {
  console.log(`Hello, ${name}!`);
}

setTimeout(showMessage, 1500, "Alice"); 
// let a=setTimeout(() => {
//     console.log("Runing");
    
// }, 1000);


let person={
    fisrtName:"Inam",
    lastName:"balghari",
    FullName: function(){
     return this.fisrtName + this.lastName;
        
    }
}
console.log(person);
