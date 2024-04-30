/*
    ==================================== Const, let, var in javaScript ==============================
*/ 

var a = 45;
var b = "Harry";
var c = null 
var d = undefined

// var vs let in javaScript

// var is globally scoped while let & const are block scoped

// var can be updated & re-declared within its scope

// let can be updated but not re-declared 

// const can neither be updated nor be re-declared

// var variables are initialized with undefined whereas let and const variables are not initialized.

// const must be initialized during declaration unlike let and var 

//  we must have to use const most of the time , than let and never use var unless we are in old code.
{
    let b = 'this'
    console.log(b)
}

console.log(b)

const pi = 3.14
console.log(pi)