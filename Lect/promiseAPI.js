
const myPromise = new Promise((resolve, reject) => {

    const user = {
        name: "Ali",
        age: 22,
        city: "Rawalpindi"
    };

    resolve(user); 
});

myPromise.then((data) => {
    console.log(data.name);
    console.log(data.age);
});

const myPromise1 = new Promise((resolve, reject) => {

    const student = {
        id: 1,
        image:"image",
        name: "Ahmad",
        course: "BS Computer Science"
    };

    resolve(student);

});

myPromise1.then((data) => {
    console.log("Name:", data.image);
    console.log("Name:", data.name);
    console.log("Course:", data.course);

});

// const promiseData = new Promise((resolve) => {

//     const users = [
//         {name:"Ali", age:22},
//         {name:"Ahmed", age:24},
//         {name:"Usman", age:21}
//     ];

//     resolve(users);

// });

// promiseData.then((data)=>{
//     console.log(data);
// });

fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())   // convert response to object
  .then((data) => {
      console.log(data);
      console.log(data.name);
      console.log(data.email);
      console.log(data.age);
      
  })
  .catch((error) => {
      console.log("Error:", error);
  });
