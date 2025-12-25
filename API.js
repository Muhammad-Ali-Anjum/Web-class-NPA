async function fetchData() {
  try {
    console.log("Fetching data...");

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    console.log("Data received:", data);

  } catch (error) {
    console.log("Error:", error.message);
  } finally {
    console.log("Done");
  }
}

fetchData();
