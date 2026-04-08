fetch('https://dummyjson.com/products/1')
.then(res => res)
.then(res => res.json())
.then(console.log);