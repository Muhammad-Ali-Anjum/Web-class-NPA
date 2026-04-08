// const mypromise=new Promise((resolve,reject)=>{
//     let prms=false;
//     if(prms){
//         resolve("promise is resolved");
//     }
//     else{
//         reject("promise is rejected");}
//     })
    // mypromise().then((message)=>{
    // mypromise.then(data=>console.log(data))
    // .catch(err=>console.error(err))
    // .finally(()=>console.log("promise is settled"));
    


    let login=(username,password)=>{
        return new Promise((resolve,reject)=>{
            if(username==="abc" && password==="12345"){
                resolve("login successful");
            }
            else{
                reject("login failed");
            }
        });
    }
    login("abc","12345").then(message=>console.log(message))
    .catch(err=>console.error(err));

   let data=()=>{
    return new Promise((resolve,reject)=>{
        resolve(
            {name:"sara",
            age:22,
            city:"skardu"
            }
           
        )
         reject("data not found")
    });
   }
    data().then(info=>console.log(info.city))
    .catch(err=>console.error(err));