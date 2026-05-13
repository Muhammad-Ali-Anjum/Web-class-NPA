// setTimeout
setTimeout(() => {
    console.log("Hello world after 2 seconds");
}
    , 2000);
    // setTimeout(callbacke function, delay);
setTimeout(() => {
    console.log("Hello world after 1 second");
}   , 1000);
setTimeout(() => {
    function greet(name) {
        console.log(name);
    }
    greet("Kumal");

        
},500);
setTimeout(() => {
    function prcessData(data) {
        console.log(data);
    }
    prcessData("Data processed");
},550)

// setInterval
let count = 0;
let intervalId = setInterval(() => {
    count++;
    console.log("Interval count: " + count);
    if (count >= 5) {
        clearInterval(intervalId);
    }
}, 1000);

// clearTimeout

// 1. Set the timeout and store the ID
const myTimer = setTimeout(() => {
  console.log("This will not run");
}, 1000);

// 2. Clear the timeout before 5 seconds pass
clearTimeout(myTimer);
