/* Homework 4
   Example 2 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 2");

// 2.	Modeling a circle (Reference text chapter 06)
// Complete the following program to add the circle object definition. Its radius value is input by the user.

// const r = Number(prompt("Enter the circle radius:"));

// // TODO: create the circle object here

// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// Get circle radius input
const r = Number(prompt("Enter the circle radius:"));

const pi = Math.PI; // PI is a static property of built-in Math object
const c = 2 * r * pi; // Circumference of circle equation
const a = r * r * pi; // Area of circle equation

// TODO: create the circle object here

const circle = {
   area: a,
   circumference: c,

}
// Display the result 
console.log(`Its circumference is ${circle.circumference}`);
console.log(`Its area is ${circle.area}`);
