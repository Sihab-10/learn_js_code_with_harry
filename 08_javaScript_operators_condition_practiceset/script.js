// Chapter 2 - Practice Set

/*
    1. Use logical operators to find whether the age of a person lies between 10 and 20

    2. Demonstrate the use of switch case statements in javaScript

    3. Write a javaScript program to find whether a number is divisible by 2 and 3

    4. Write a javaScript program to find whether a number is Divisible by either 2 or 3

    5. Print "you can drive " or "you cannot drive" based on a age being greater than 18 using ternary operator


*/

let age = prompt("Enter your age: ");
age = Number.parseInt(age)
if (age >= 10 && age <= 20) {
    console.log("Your age is between 10 to 20");
} else {
    console.log("Your age is not between 10 to 20");
}

let banor = prompt("Choose a fruit between banana and Mango !");
switch (banor) {
    case "banana":
        console.log("Banana is a power boosting fruit");
        break;
    case "Mango":
        console.log("Mango is famous in Rajshahi");
        break;
    default:
        console.log("Your fruit is special")

}

let num = prompt(
    "Enter a number and lets find this number visible by 2 and 3 or not"
);
num = Number.parseInt(num)
if (num % 2 == 0) {
    console.log("The number is divisible by 2");
} else if (num % 3 == 0) {
    console.log("The number is divisible by 3");
} else {
    console.log("The number is not divisible by 2 or 3");
}

console.log(age < 18 && age <= 100 ? "you can not drive" : "You can drive")