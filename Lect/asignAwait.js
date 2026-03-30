const API_URL = "https://jsonplaceholder.typicode.com/users/1";

// async function fetchUsers() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();

//     console.log("API Data:", data);

//     return data; // return for assign
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
 async function fetchUsers() {
    try{
        const response = await fetch(API_URL);
        const data =await response.json();
        // console.log(data);
        
        return data;
    } catch (error) {
        console.error("Error:", error);
    }
}
// assign
let users = [];

async function main() {
  users = await fetchUsers();
  console.log("Assigned Users:", users);
}

main();