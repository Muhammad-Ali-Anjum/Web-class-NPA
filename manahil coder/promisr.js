// promise with real base api
// fetch('https://dummyjson.com/test')
// fetch('https://dummyjson.com/products')
// .then(res => res.json())
// .then(console.log);
 
let getData = () => {
    return new Promise((resolve, reject) => {
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(resolve)
        .catch(reject);
    });
};

getData()
.then(console.log)
.catch(console.error);