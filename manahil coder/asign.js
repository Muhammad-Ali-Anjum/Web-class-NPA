//  assign await 
async function fetchData() {
  try {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
// async function fetchDatas() {
// let response =await fetch("https://dummyjson.com/products3");
// const data = await response.json();
// console.log(data);
// }
// fetchDatas();