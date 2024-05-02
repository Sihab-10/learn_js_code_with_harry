/*
===================================Chapter 1 - Practice Set ================================

1. Create a variable of type string and try to add a number to it. 

2. Use typeof operator to find the datatype of the string in last question. 

3. Create a const object in javaScript . can you change it to hold a number later?

4. Try to add a new key to the const object in problem 3 . were you able to do it?

5. Write a js program to create a word-meaning dictionary of 5 words. 

*/ 

// 1st question 
// answer:

let string1 = "Sihab";
let num1 = 10;
let add = string1 + num1;
console.log(add);

// 2nd question answer:

console.log(typeof add)

// 3rd question answer:

const object = {
    name: "sihab", 
    designation: "Software Developer",
    age: 26
}
console.log(object)
// no we can not change because we use const keyword 

// 4th question answer:
// to add another key and value in object 
object ['friend'] = "Sifat";
// to change the value of an existing key
object ['designation'] = "Creative Designer"
console.log(object)

// 5th question answer:
// lets make a dictonary

const dictionary = {
    preponderant: "superior in weight",
    appreciate: "recoginze the full worth of",
    ataraxia: "calmness untroubled by mental or emotional disquiet",
    yakka: "work, especially hard work",
    adventure: "an unusual and exciting or daring experience."
}
console.log(dictionary)