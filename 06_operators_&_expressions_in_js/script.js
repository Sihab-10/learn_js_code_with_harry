/*
=================== Operators & Expressions in JavaScript ===========================================
*/ 

/*
for example:
                !       true        =     flase
            operator  operand  operator  result 
*/ 
console.log(!true)

// Chapter 2 - Expressions & Conditionlas

// A fragment of code that produces a value is called an expression. Every value written literally is an expression for example: 77 or "Harry"

// Operators in JavaScript

/*
================================== Arithmatic Operator =================================

    +           Addition
    -           Substraction
    *           Multiplication
    **          Exponential (a to the power b)
    /           Division
    %           Modulus (its show the remainder of the division of two number)
    ++          increament
    --          Decrement

*/ 
console.log("Operators in JS")
let a = 5;
let b = 2;
console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a ** b = ", a ** b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
// lets see the increament and decrement of a number

let x = 6;
console.log("প্রথমে (x++) post increment করে  x এক increase হয়ে চুপ করে থাকবে আর প্রিন্ট করবে তাকে যা assign করা হয়েছে সেটা  ", x++);
console.log("আর পরেরবার আবার যখন x print করবো তখন x এর increment value দেখাবে ", x);
console.log("এখানে (x--) post decrement এ x এক decrease হয়ে চুপ করে থাকবে আর প্রিন্ট করবে তাকে যা assign করা হয়েছে সেটা", x--);
console.log("আর পরেরবার আবার যখন x print করবো তখন x এর decrement value দেখাবে", x);
console.log("এখানে (++x) pre increment এর ক্ষেত্রে প্রথমেই x এর value এক increment করে সেটি direct print করবে ", ++x);
console.log("এখানে (++x) pre decrement এর ক্ষেত্রে প্রথমেই x এর value এক decrement করে সেটি direct print করবে ",--x);

// ++x প্রথমেই ১ বাড়াবে এবং বাড়ানো value print করবে 
// কিন্ত x++ তাকে দেয়া value print করবে পরের বার সে তার বাড়ানো value print করবে । 
// --x প্রথমেই ১ কমাবে এবং তার কমানো value print করবে 
// কিন্ত x-- তাকে দেয়া value print করবে পরের বার সে তার কমানো value print করবে । 

// for practice purpose
console.log("This is for practice purpose")
let y = 10;                     
console.log("++y", ++y);
console.log("y++", y++);
console.log("--y", --y);
console.log("y--", y--);
console.log("y  ", y);
console.log("y--", y--);

/*
    y        ++y     y++       --y        y--      y        y--
    10       11
    12               11 
    11                         11      
    10                                    11      
    10                                            10        
    9                                                       10 
*/ 

//================================ Assignment Operator ==========================

/*
        =       x = y
        +=      x = x + y
        -=      x = x - y
        *=      x = x * y
        /=      x = x / y
        %=      x = x % y
        **=     x = x ** y
*/ 

// for example:

let assignment = 6;
assignment +=3;
console.log(assignment)

// =============================== Comparison Operator =========================

/* 
    ==          equal to 
    !=          not equal
    ===         equal value and type
    !==         not equal value or not equal type
    >           greater than
    <           less than
    >=          greater than or equal to
    <=          less than or equal to
    ?           ternary operator
*/ 
// comparison operator যখন use করবো তখন return value হিসেবে true or false return করবে 
//  or মানে progrmming এর ভাষায় যেকোনো ১ টা সত্য হলেই সেটা সত্য হয়ে যাবে ।  
let comp1 = 6;
let comp2 = '6';
console.log("comp1 == comp2 is ", comp1 == comp2);
console.log("comp1 != comp2 is ", comp1 != comp2);
console.log("comp1 === comp2 is ", comp1 === comp2);
console.log("comp1 !== comp2 is ", comp1 !== comp2);

// =================================== logical operators =====================

/*
    &&     logical and       ->     true  true  - true  otherwise every time false
    ||     logical or        ->     only one side true then true otherwise every time false
    !      logical not       ->     !true - false      !false - true
*/ 

let log1 = 6;
let log2 = 7;
console.log(log1==6 && log2<10)
console.log(log1==6 && log2<3)
console.log(log1==6 || log2<3)
console.log(!true)