// object
var person = {
    name: "kumal",
    age: 20,
    isStudent: true
};
console.log(person.name);
console.log(person.age);
console.log(person.isStudent);
person.name = "taha";
console.log(person.name);
person.city = "karachi";
console.log(person.city);
delete person.age;
console.log(person.age);

// nested object
var student = {
    name: "kuaml",
    age: 20,
    city:["skardu", "islamabad", "karachi"],
    subjects: {
        math: 90,
        science: 85
    },
    data: function() {
        return `${this.name} is ${this.age} years old and lives in ${this.city[0]}`;
    }
};
console.log(student.name);
console.log(student.age);
console.log(student.city);
console.log(student.subjects.math);
console.log(student.subjects.science);
console.log(student.data());