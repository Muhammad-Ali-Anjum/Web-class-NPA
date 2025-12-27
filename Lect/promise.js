const Newpromis=new Promise((resolve, reject) => {
    //Do an async scriprt
    // DB call , cryptogarphy, newtwork
    setTimeout(() => {
        console.log("asssign task complete");
        resolve();
    }, 1000);
})
Newpromis.then(()=>{
    console.log("promise consumed");
})

new Promise ((resolve,reject)=>{
setTimeout(() => {
    console.log("assyng task 2");
    resolve();
}, 1000);
}).then(() => {
    console.log("asign 2 resolved");
    
})

const promise3=new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username:"anjum",email:"anjum@gmail.com"})
    }, 1000);
})

promise3.then((user)=>{
console.log(user);

})

let promis4=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=false;
        if(!error){
            resolve({username:"anjum",password:"1122"})
        }
        else{
            reject("ERROR:something error")
        }
    }, 1000);
})

promis4.then((user) => {
    console.log(user);
    return user.username;
    
}).then((username)=>{
console.log(username);

}).catch((error)=>{
    console.log(error);  
}).finally(()=>{
    console.log("The promise is resolved or reject");
    
})
// console.log(username);

const promis5=new Promise((resolve, reject) => {
    setTimeout(() => {
        let error=true;
        if(!error){
            resolve({username:"anjum",password:"1122"})
        }
        else{
            reject("ERROR:something error")
        }
    }, 1000);
})

async function consumePromeis5(){
  try {
     const response= await promis5 
   console.log(response);
  } catch (error) {
    console.log(error);
    
  }
   
}
consumePromeis5()

