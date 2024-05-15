/*
================================ For loops in js ========================
*/ 

/*
We use loops to perform repeated actions. For example - If you are designed a task of printing numbers from 1 to 100 , it will be very hectic to do it manually, loops help us automate such tasks 

*/ 

// Types of loops in JavaScript

/*
    for loop -> loop a block of code no of times
    for in loop -> loops through the keys of an object
    for of loop -> loops through the values of an object
    while loop -> loops a block based on a specific condition 
    do while loop -> while loop variant which runs atleast once
*/ 
// The for loop 
// The syntax of a for loop looks something like this 
/*

for(statement 1; statement 2; statement3){
    //code to be executed
}
-> statement 1 is executed one time
-> statement 2 is the condition base on which the loop runs (loop body is executed)
-> statement 3 is executed everytime the loop body is executed 
*/ 


// 0 থেকে 4 পর্যন্ত print করতে চাইলে  (0 to n-1 print করবে)
// for(let i = 0 ; i < 5; i++){
//     console.log(i)
// }
// 1  থেকে  5 পর্যন্ত print করতে চাইলে (0 to n+1 print করবে)
// for (let i = 0; i<10;i++){
//     console.log(i+1)
// }

// Program to add first n natural number

// let sum = 0
// let n = prompt("Enter the value of n : ")
// for(let i = 0; i < n ; i++){
//     sum+= (i+1) ;
// }
// console.log("Sum of first " + n + " natural numbers is " + sum)



// The for-in loop
// the syntax of for in loop look like this
/*
    for (key(variable) in object){
        code to be execute
    }


*/ 

let obj = {
    sihab:50,
    sifat:80,
    suha:56,
    shiv:23
}
for (let a in obj){
    console.log("Marks of " + a + " is " + obj[a])
}

// for in loops also work with arrays



//  The for of loop
for (let a of "Sihab"){
    console.log(a)
}

// for of loop কখনো key এর value print করে না । 


