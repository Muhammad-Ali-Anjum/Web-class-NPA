fetch('https://dummyjson.com/products/1')
.then(res => res)
.then(res => res.json())
.then(console.log);



// async function getUserData() {
//   try {
//     const response = await fetch('https://dummyjson.com/products/1'); 
//     const data = await response.json(); 
//     console.log(data); 
//   } catch (error) { console.error("Request failed:", error); }
// }getUserData();

// async function getUserData() {
//     try {
//         const responce= await fetch('https://dummyjson.com/products/1');
//         const data=await responce.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Request failed:", error);
//     }
// }
// getUserData();
