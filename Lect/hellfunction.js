// Hell async function 
let fun=(para,fun1)=>{
    console.log(`the fuction ${para} is rining`);
    fun1();
}
let fun1=()=>{
console.log("function 2 runing");

}

fun("inam",fun1)

// function fn(a,s){
   
//     console.log(`the valus of parameter fist ${a} and second parameter ${s}`);
//     child()
//     function child(){
//         console.log("child is runing");
//         childs()
//         function childs(){
//             console.log("child is runig");
            

//         }
//     }
// }

// fn(2,3)

function fn(){
    Chil()
    console.log("fun");
    
    function Chil() {
        console.log("children function runing");
        subchild()
        function subchild() {
            console.log("sub child is runing");
            
        }
        
    }
}
fn()


// const promise=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("the promise is runing");
//         resolve()
//     }, 1000);
// });
// promise.then(()=>{
//     console.log("resoled");
    
// })
// const promise2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve({username:"anjum",email:"anjum@gmail.com"})
//     }, 1000);
// })

// promise2.then((data)=>{
// console.log(data);
// })
