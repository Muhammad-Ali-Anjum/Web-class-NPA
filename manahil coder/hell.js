// hell function
function hell() {
    console.log("Welcome to Hell!");
}
hell();

// getUser(userId, (user) => {
//     getOrders(user, (orders) => {
//         processOrders(orders, (processed) => {
//             sendEmail(processed, (confirmation) => {
//                 console.log("Order Processed:", confirmation);
//             });
//         });
//     });
// });
// callback hell function
function getUser(userId, callback) {
    getOrder(userId, (orders) => {
        processOrders(orders, (processed) => {
            sendEmail(processed, (confirmation) => {
                console.log("Order Processed:", confirmation);
            });
        });
    });
    
    }
getUser(1, (user) => {
    console.log("User:", user);
});

function getOrder(userId, callback) {
    setTimeout(() => {
        callback(["order1", "order2"]);
    }, 1000);
}
function processOrders(orders, callback) {
    setTimeout(() => {
        callback(["processedOrder1", "processedOrder2"]);
    }, 1000);
}

function sendEmail(processed, callback) {
    setTimeout(() => {
        callback("Email Sent");
    }, 1000);
}