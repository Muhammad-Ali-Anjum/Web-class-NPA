//  IIFE (Immediately Invoked Function Expression)
(function() {
    // Code inside this function is private and cannot be accessed from outside
})(); // The parentheses at the end immediately invoke the function
(function() {
    // This is an IIFE that calculates the sum of two numbers
    var a = 5;
    var b = 10;
    var sum = a + b;
    console.log("The sum of " + a + " and " + b + " is: " + sum);
})(); // The parentheses at the end immediately invoke the function
(function() {
    // This is an IIFE that creates a private variable and a function to access it
    var privateVariable
        = "This is a private variable";
    function getPrivateVariable() {
        return privateVariable;
    }
    console.log(getPrivateVariable()); // Output: This is a private variable
})(); // The parentheses at the end immediately invoke the function

// hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their containing scope during the compilation phase. This means that you can use variables and functions before they are declared in the code. However, only the declarations are hoisted, not the initializations.
console.log(x); 
var x = 10; 
// console.log(y);
// let y = 20;
// hell function
function hell() {
    console.log("Hello, World!");
}

hell(); // Call the function
function hellChain() {
    console.log("Hello, World!");
     function nestedFunction() {
        console.log("This is a nested function.");
         function innerNestedFunction() {
            console.log("This is an inner nested function.");
             function innermostFunction() {
                console.log("This is the innermost function.");
                function deepestFunction() {
                    console.log("This is the deepest function.");
                }
            }
        }
    }
}
hellChain(); // Call the function to execute the nested functions
// innermostFunction(); // Call the deepest function
console.log(hellChain());

// Callback Hell in JavaScript

function firstFunction(callback) {
    setTimeout(function() {
        console.log("First function executed");
        callback();
    }, 1000);
}

function secondFunction(callback) {
    setTimeout(function() {
        console.log("Second function executed");
        callback();
    }, 1000);
}
function thirdFunction(callback) {
    setTimeout(function() {
        console.log("Third function executed");
        callback();
    }, 1000);   
}

function fourthFunction(callback) {
    setTimeout(function() {
        console.log("Fourth function executed");
        callback();
    }, 1000);
}
function fifthFunction(callback) {
    setTimeout(function() {
        console.log("Fifth function executed");
        callback();
    }, 1000);
}
firstFunction(function() {
    secondFunction(function() {
        thirdFunction(function() {
            fourthFunction(function() {
                fifthFunction(function() {
                    console.log("All functions executed");
                });
            });
        });
    });
});
