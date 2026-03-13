
let promis=new Promise((resole,reject)=>{
    resole("promise resole")
    reject("promis reject")
})
promis
.then(pra=>console.log(pra))
.catch(e=>console.error(e)
)

function pormisfun(user,password){
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            if(user=="abc"&& password===1234){
                res("Login successfuy");
            }
            else{
                rej("invlid user")
            }
        },1000)
    })
}

pormisfun("abc",123)
.then(e=>console.log(e)
)
.catch(e=>console.error(e))