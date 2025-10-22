// let person={
//     name:"noori",
//     age:23,
//     cls:()=>{
//     console.log("web");
//     console.log("senior");
//     console.log("javascript dev");
//     console.log("");
    
//     },
//     zip:[1,2,3,4,5,6,7,8,90,0,5,6,7,5]

// }
// // console.log(person.cls());
// console.log(person.name);
// console.log(person.zip);


function deepClone(obj) {
 function clone(obj, traversedObjects) {
 var copy;
 // primitive types
 if(obj === null || typeof obj !== "object") {
 return obj;
 }
 // detect cycles
 for(var i = 0; i < traversedObjects.length; i++) {
 if(traversedObjects[i] === obj) {
 throw new Error("Cannot clone circular object.");
 }
 }
 // dates
 if(obj instanceof Date) {
            copy 
= new Date();
            copy.setTime(obj.getTime());
 return copy;
 }
 // arrays
 if(obj instanceof Array) {
            copy 
= [];
 for(var i = 0; i < obj.length; i++) {
                copy.push(clone(obj[i], traversedObjects.concat(obj)));
 }
 return copy;
 }
 // simple objects
 if(obj instanceof Object) {
            copy 
= {};
 for(var key in obj) {
 if(obj.hasOwnProperty(key)) {
                    copy[key] 
= clone(obj[key], traversedObjects.concat(obj));
 }
 }
 return copy;
 }
 throw new Error("Not a cloneable object.");
 }
 return clone(obj, []);
 }