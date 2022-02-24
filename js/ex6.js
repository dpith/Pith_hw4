/* Homework 4
   Example 6 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 6");

// 6.	Guess Number
// Write a program that generates a random number between 1 and 100, inclusive.
// It then prompts the user to guess the number (assume valid entry).
// The program will provide the following feedback after each guess:
// •	Too low, guess again
// •	Too high, guess again
// •	Correct
// If correct, also display how many attempts it took.  For example:
// Correct!  It took you 7 attempts to guess the correct number.


function ex6() {

   let guessString = '';
   let guessNumber = 0;
   let correct = false;
   let numTries = 0;

   const randomNumber = Math.random() * 100;
   const randomInteger = Math.floor(randomNumber);
   const target = randomInteger + 1;
//    const target = Math.floor(Math.random() * 100) + 1; would work also. 
//    This piece of code generates a random number between 1-100 & stores it in a variable 

   do {
       guessString = prompt('I am thinking of a number in the range 1 to 100.\n\nWhat is the number?')
       if (guessString === null) { // Fixes the "cancel" behavior
           return;
       } 
       guessNumber = +guessString; // A plus sign as a prefix to a variable is a numeric conversion, it turns a string into a number
       console.log(`${guessNumber}`);
       correct = checkGuess(guessNumber, target); // return value checkGuess function (w/ two arguments)

   } while (!correct); // ! is logical not. do ... while loop will keep repeating till both arguments match or are true
   // This do ... while loop gets the guess from the player & stores it in a variable 

   alert(`Correct! It took you ${numTries} attempts to guess the correct number.`);

   function checkGuess(guessNumber, target) {
       let correct = false;

       if (isNaN(guessNumber)) {
           alert('You have not entered a number\n\nPlease enter a number between 1-100 range.');   
       } else if ((guessNumber < 1) || (guessNumber > 100)) {
           alert('Please enter a integer in the 1-100 range.');
       } else if (guessNumber > target) {
           alert('Too high, guess again');
       } else if (guessNumber < target) {
           alert('Too low, guess again');
       } else { 
           correct = true;
       }
       numTries += 1
       return correct;
       }
   }