// object destructuring 
const person = {
    name: ' manahil',
    age: 30,
    city: 'skardu',
    sayHello: function () {     
           console.log('hello');
    },
    data:function(){
        console.log(`Name: ${this.name}, Age: ${this.age}, City: ${this.city}`);
    }
    ,
    street:{
        name:'main street',
        number: 123,
        area:{
           area1: ['gulshan', 'saddar', 'gulsan-e-iqbal'],
            area2: ['clifton', 'defence', 'karachi'],
            area3: ['gulshan', 'saddar', 'gulsan-e-iqbal']

        },
        showArea: function() {
            console.log(`Area 1: ${this.area.area1.join(', ')}`);
            console.log(`Area 2: ${this.area.area2.join(', ')}`);
            console.log(`Area 3: ${this.area.area3.join(', ')}`);
        },
        showInfo: function() {
            console.log(`Street Name: ${this.name}, Street Number: ${this.number}`)
        }
    }
};
// const name = person.name;
// const age = person.age;
// const city = person.city;
// object destructuring
const { name, age, city } = person;
console.log(name);
console.log(age);
console.log(city);
person.sayHello();
person.data();
person.street.showInfo();
person.street.showArea();
