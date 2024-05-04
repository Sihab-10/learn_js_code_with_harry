/*
========================= Conditional expression in javaScript =======================
*/ 

/* এটার একটা use case হচ্ছে যে আমি যদি একটা log in form design করি এবং user যদি সেখানে কোন ভুল একটা input দেয় তাহলে আমি আরেকটা option B তাকে suggest করবো । অর্থাৎ যদি আমার condition সে fill up করে তাহলে আমি তাকে বলবো ok go for it otherwise আমি তাকে অন্য কিছু return হিসেবে দিব । 
*/

// আমরা কখনো কখনো চাই যে কিছু block of code execute হবে যখন সে কিছু condition fullfill করবে। 

/*
Conditional Statements

Sometimes we might have to execute a block of code based off some condition. 
For example, a prompt might ask for the age of the user and if its greater then 18 display a special message. 

In javaScript we have three forms of if ... else statement 

1. if statement
2. if ... else statement 
3. if ... else if ... else statement 

*/ 
// to get some input from browser we use prompt() function in js

// we often use alert() funciton to show any message in the browser 
let a = prompt("Hey whats your age?")
a = Number.parseInt(a) 
// to typecast string to number we use Number.parseInt(variable_name)
console.log(typeof a)
if(a>0){
    alert("This is a valid age !")
}
// if statement 
// if statement এর ক্ষেত্রে যদি if এর condition true হয় তাহলেই সেটি if block এর ভিতরে প্রবেশ করবে otherwise করবে না ।

// if .... else statement 
// if ... else statement এর ক্ষেত্রে if এর condition true হলে সেটি if block এর ভিতরে ঢুকে যা আসে সেটা print করবে else এ আর যাবে না , আর যদি if এর condition true না হলে else এর ভিতরে যা  আছে সেটি execute হবে । 
let b = prompt("Enter Another age : ")
if(b>0){
    alert("This is a valid age")
}
else{
    alert("This is an invalid age")
}

// if.....else if...else statement 
// Sometimes we might want to keep recheaking a set of conditions one by one until one matches. We use if else if for achieving this. 

// অর্থাৎ বাড় বাড় আমাদের কে যদি কিছু check করার প্রয়োজন পরে তাহলে আমরা check করতে পারি if ... else if ... else statement এর সাহায্যে ।
let age = prompt("Enter your Age for driving a Car: ")
if(age<0){
    alert("This is an invalid age")
}
else if(age>0 && age<18){
    alert("You are not eligible for driving")
}
else if(age>=18 && age<=80){
    alert("You are eligible for driving")
}
else{
    alert("Your age is too much for driving")
}

// এই ভাবে আমরা check করে করে আমরা কোন কিছু check করবো 
// এখানে else if যেকোনো সংখ্যক বার থাকতে পারে কিন্তু execute হবে যেকোনো একটা অর্থাৎ হয় if execute হবে অথবা else if execute হবে অথবা else execute হবে। 

// Homework - Explore switch statement and write a basic program e

const fruit = prompt("Choose a fruit among these (banana or watermelon)")

switch (fruit){
    case 'banana':
        alert('Bananas are very healthy for health')
        break
    case 'watermelon':
        alert('Watermelon is full of water and sugar')
    break
    default:
        alert("Sorry you are entering the wrong fruit")
}

// JavaScript  ternary operator

// Evaluates a condition and executes a block of code based on the condition 

// condition ? exp1 : exp 2
// (marks > 10)? "yes" : "No"

console.log("You can ", (age<18? "not drive" : "drive"))