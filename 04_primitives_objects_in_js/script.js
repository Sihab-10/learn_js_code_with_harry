/*
  ==============================  Primitve data types and objects ==============================
*/ 

// Primitive data types are a set of basic data types in javascript 
// Object is a non primitive datatype in javascript

// These are the 7 primitive datattypes in javaScript

//  n           n           b           b           s           s           u

// null     number      boolean     BigInt      String      Symbol      Undefined

// object
// An object in javaScript can can created as follows

const item = {
    name: "Sihab",
    designation: "Software Developer"
}
console.log(item);


let a = null;
// আমি যোর করে বলতেসি যে এখানে কিছু নাই । 
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g = undefined;
// এর মানে এখানে কিছু define করা নাই বা কিছু নাই । 
let h ;
// its also an undefined case. 

console.log(a, b, c, d, e,  g);
console.log(typeof(d));

// Non primitive data type : object in js

const myFamily={
    "Sihab": true,
    "Sifat": false,
    "Suha": 10,
    "Sabina": undefined
}
console.log(myFamily["Sihab"]);
