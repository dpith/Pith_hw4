/* Homework 4
   Example 3 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 3");

// 3.	Arrays 
// Write a program the creates the following array, then calculates and shows the following:
// •	Sum of all array values
// •	Minimum value
// •	Maximum value

// const values = [3, 11, 7, 2, 9, 10];

const values = [3, 11, 7, 2, 9, 10];

// Getting sum of array values
let sum = values.reduce(function(a, b) {
    return a + b;
}, 0);

console.log(sum); // Prints 42

// Getting max value of array
var maxValue = Math.max(...values);
console.log(maxValue); // Prints 11

// Getting min value of array
var minValue = Math.min(...values);
console.log(minValue);  // Prints 2