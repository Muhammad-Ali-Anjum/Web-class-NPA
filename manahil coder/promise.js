// promise


let promise = new Promise((resolve, reject) => {
    let a = 1 + 1;
    if (a == 2) {
        resolve('success');
    }
    else {        reject('failed');
    }   
});
promise.then((message) => {
    console.log('this is in the then ' + message);
}).catch((message) => {
    console.log('this is in the catch ' + message);
});

// username passwords
let getUser = new Promise((resolve, reject) => {
    let username = 'manahil';
    let password = '12345';
    if (username === 'manahil' && password === '12345') {
        resolve('login successful');
    }
    else {
        reject('login failed');
    }
});
getUser.then((message) => {
    console.log('this is in the then ' + message);
}).catch((message) => {
    // console.log('this is in the catch ' + message);

    console.error('this is an error ' + message);
});

function login(username, password) {
    return new Promise((resolve, reject) => {
        if (username === 'manahil' && password === '12345') {
            resolve('login successful');
        }
        else {
            reject('login failed');
        }
    });
}

login('manahil', '12345').then((message) => {
    console.log('this is in the then ' + message);
}).catch((message) => {
    console.error('this is an error ' + message);
});

// object
let user = {
    username: 'manahil',
    password: '12345'
};
function loginUser(user) {
    return new Promise((resolve, reject) => {
        if (user.username === 'manahil' && user.password === '12345') {
            resolve('login successful');
        }
        else {
            reject('login failed');
        }
    });
}

loginUser(user).then((message) => {
    console.log('this is in the then ' + message);
}).catch((message) => {
    console.error('this is an error ' + message);
});

// object like realbase data for username and password
let database = {
    manahil: '12345',
    ali: '54321'
};
function loginDatabase(username, password) {
    return new Promise((resolve, reject) => {
        if (database[username] && database[username] === password) {
            resolve('login successful');
        }
        else {
            reject('login failed');
        }
    });
}

loginDatabase('manahil', '12345').then((message) => {
    console.log('this is in the then ' + message);
}).catch((message) => {
    console.error('this is an error ' + message);
});