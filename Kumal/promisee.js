// promise
let myPromise = new Promise((resolve, reject) => {});
myPromise.then(result => {}).catch(error => {});
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved!");
    }, 2000);
});

promise.then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});
let logins= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Login successful!");
    }, 1000);
});

let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Data fetched!");
    }, 1500);
});
Promise.all([logins, fetchData]).then(results => {
    console.log(results);
}).catch(error => {
    console.error(error);
});

// promise username and password
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "password") {
                resolve("Login successful!");
            } else {
                reject("Invalid username or password.");
            }
        }, 1000);
    });
}

login("admin1", "password").then(result => {
    console.log(result);
}).catch(error => {
    console.error(error);
});