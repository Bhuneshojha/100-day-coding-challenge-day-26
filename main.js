"use strict";
//          100 days of coding challenge ( DAY 26 )
Object.defineProperty(exports, "__esModule", { value: true });
//   Question 01
function twoNumbers(Num1, Num2) {
    // --calculates the sum of two numbers
    return Num1 + Num2;
}
console.log(twoNumbers(15, 16));
// --Here, we ask our function to add 5 and 7, and it tells us the answer is 12.
//   Question 02    
function greetUser(name = "Annonymous") {
    console.log(`Hello, ${name}`);
}
// --Trying the function with a name and without
greetUser("Raja Ji"); // --It shows Hello Raja ji
greetUser(); // --It shows Hello Annonymous
// We see how our function can say hello to someone by name, or just say hello if we don't know the name.
//   Question 03 
// --Function declaration for squaring a number
function squareDeclaration(number) {
    return number * number;
}
// --Function expression for squaring a number
const squareExperession = function (number) {
    return number * number;
};
console.log(squareDeclaration(20));
console.log(squareExperession(20));
// Both methods give us the same result, showing two different ways to create functions that do the same thing.
