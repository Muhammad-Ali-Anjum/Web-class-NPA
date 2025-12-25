// async function fetchData() {
//   try {
//     console.log("Fetching data...");

//     const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

//     if (!response.ok) {
//       throw new Error("Failed to fetch data");
//     }

//     const data = await response.json();
//     console.log("Data received:", data);

//   } catch (error) {
//     console.log("Error:", error.message);
//   } finally {
//     console.log("Done");
//   }
// }

// fetchData();


// Basic Real-Project Example: Dashboard Loading User Data

async function loadDashboard() {
  try {
    console.log("Loading dashboard...");

    // Show loading spinner (simulate with delay)
    await new Promise(resolve => setTimeout(resolve, 2000));
    console.log("Loading spinner done");

    // Fetch user data from API
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const user = await response.json();
    
    // Display user data (console simulates UI)
    console.log("User Name:", user.name);
    console.log("Email:", user.email);
    console.log("Username:", user.username);

    // Another delay before showing dashboard ready message
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Dashboard ready ✅");

  } catch (error) {
    console.log("Error loading dashboard:", error.message);
  }
}

// Call the function
loadDashboard();
