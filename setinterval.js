// let a=20;
// // let b=2+a++
// // console.log(b);
// console.log(a);
// let c=2+ ++a;
// console.log(c);



// let count = 0;

// // Function to increment and display the count
// function incrementCounter() {
//   count++;
//   console.log(`Count: ${count}`);
// }

// // // Set interval to call incrementCounter every 1000ms (1 second)
// const intervalId = setInterval(incrementCounter, 1000);

// // // Stop the counter after 5 seconds
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log('Counter stopped');
// }, 10000);


let count = 5;

function countdown() {
  if (count === 0) {
    console.log("Done!");
    return;
  }
  console.log(count);
  count--;
  setTimeout(countdown, 1000);
}

countdown();

console.log("Program started");

// setTimeout (runs once)
const timeoutId = setTimeout(() => {
  console.log("setTimeout executed after 3 seconds");
}, 3000);

// // setInterval (runs repeatedly)
// let count = 1;
// const intervalId = setInterval(() => {
//   console.log("setInterval running:", count);
//   count++;
// }, 1000);

// // clearTimeout (cancel timeout before execution)
// setTimeout(() => {
//   clearTimeout(timeoutId);
//   console.log("setTimeout cancelled before execution");
// }, 1500);

// // clearInterval (stop interval after 5 seconds)
// setTimeout(() => {
//   clearInterval(intervalId);
//   console.log("setInterval stopped");
// }, 5000);

// console.log("Waiting for timers...");


// console.log("Fetching data...");

// fetch("https://jsonplaceholder.typicode.com/posts/1")
//   .then(response => {
//     if (!response.ok) {
//       throw new Error("Network response was not OK");
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log("API Data received:");
//     console.log(data);
//   })
//   .catch(error => {
//     console.log("Error:", error.message);
//   })
//   .finally(() => {
//     console.log("Fetch process completed");
//   });
