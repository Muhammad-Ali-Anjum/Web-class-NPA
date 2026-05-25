// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://dummyjson.com/products"
//     );

//     const data = await response.json();

//     console.log(data.products);
//   } catch (error) {
//     console.log(error);
//   }
// };

// fetchData();

const fetchData = async () => {
  try {
    const response = await fetch("https://dummyjson.com/products");

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    const data = await response.json();

    const products = data.products;

    console.log("Total Products:", products.length);
    console.log("Products List:", products);
  } catch (error) {
    console.error("Error fetching data:", error.message);
  }
};

fetchData();