// // An IIFE (Immediately Invoked Function Expression)
// (function() {
//     // Private variable
//     var privateCounter = 0;
//     // Private function
//     function privateFunction() {
//         console.log("This is a private function. Counter: " + privateCounter);
//     }
//     // Public API
//     window.myModule = {
//         incrementCounter: function() {
//             privateCounter++;
//             privateFunction();
//         }
//     };
// })();
// // Usage
// myModule.incrementCounter();

// An IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("hi");
    function add(a, b) {
        return a + b;
    }
    // Expose the add function to the global scope
   addToGlobal = add;


    
})();
; // This will work and return 15
console.log(addToGlobal(5, 10));

(function() {})();
