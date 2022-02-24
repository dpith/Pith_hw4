/* Homework 4
   Example 1 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 1");

// 1.	Calculator
// Input
// Ask the user for the following
// •	Number1
// •	Number2
// •	Mathematical Operation (+, -, *, /)
// Assume valid input
// Output
// The result of the mathematical operation in the following format:
// Number1 operation Number2 = result.

// Explain program to user
alert("This simple caculator program will ask you for two numbers and a mathematical operator to calculate a result.");

// Take operand input
const nb1 = Number(prompt(`Enter first number:`));
const nb2 = Number(prompt(`Enter second number:`));
// Take operator input
const matOp = prompt(`Enter mathematical operator (+,-.*,/):`);
// Initialize result variable
let result;

// If conditional logic to test operator input
if (matOp == '+') {
   result = nb1 + nb2;
}
else if (matOp == '-') {
   result = nb1 - nb2;
}
else if (matOp == '*') {
   result = nb1 * nb2;
}
else {
   result = nb1 / nb2;
}

// Display the result
console.log(`${nb1} ${matOp} ${nb2} = ${result}`);