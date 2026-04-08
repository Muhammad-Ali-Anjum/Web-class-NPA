const mypromise=new Promise((resolve,reject)=>{
    let prms=false;
    if(prms){
        resolve("promise is resolved");
    }
    else{
        reject("promise is rejected");}
    })
    // mypromise().then((message)=>{
    mypromise.then(data=>console.log(data))
    .catch(err=>console.error(err))
    .finally(()=>console.log("promise is settled"));
    