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
