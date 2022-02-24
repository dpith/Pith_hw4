/* Homework 4
   Example 4 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 4");

// 4.	List of words
// Write a program that asks the user for a word until the user types "stop" (case insensitive: e.g.: STOP, stop, Stop, StOp, …).  The program then shows each of these words, except "stop".  If "stop" is the first word entered, display an appropriate message.
// Notes:
// •	Use a loop to accept user input and exit when "stop" is entered (case insensitive)
// •	If "stop" is not entered, add the words to an array
// •	When "stop" is entered, display the words in the array.

// Examples:
// Input: hello, goodbye, JavaScript, stop
// Output:
// You entered the following words:
// hello
// goodbye
// JavaScript

// Input: Stop
// Output (below or similar):
// No words to display, Stop was the first word entered.

// Initialize variables 
let word = "";
let wordArray = [];

// While loop to accept user input 
while(true) {
   let word = prompt("Enter a word or type stop to quit:");
   let lowercaseWord = word.toLowerCase(); // Case insensitive behavior
   // Loop exits when "stop" is entered (case insensitive)
   if ((lowercaseWord === "stop") && (wordArray.length === 0)) { // If "stop" is first word entered
      console.log("No words to display, Stop was the first word entered.");
      break;
   } else if (lowercaseWord === "stop") {
      break;
   } else { // If "stop" is not entered, add word into array
      wordArray.push(word);
   }
}
// Display array elements in new line for output
for (i = 0; i< wordArray.length; i++) {
	console.log(wordArray[i]); 
}