/* Homework 4
   Example 5 JavaScript code
*/

console.log("Doug's Output from Homework 4 Example 5");

// 5.	Write a program that asks the user for a word.  It then displays the following:
// •	Number of vowels in the word (a, e, i, o, u, and y)
// •	Whether your word is a palindrome or not
// o	A palindrome is a word that is spelled the same way both forward and backwards (e.g. radar, level, madam)

// Note:  Make the program case insensitive

// Examples:
// Input: Madam
// Output: Madam contains 2 vowels and is a palindrome

// Input: JavaScript
// Output: JavaScript contains 3 vowels and is not a palindrome

let word = prompt(`This program will accept a word and return its number of vowels as well as whether or not this word is a palindrome.`)

const vowelCount = str => {
   let vowels = /[aeiou]/gi; // vowel RegEx
   let result = str.match(vowels); // Check whether string matches vowel RegEx and stores in variable
   let count = result.length;
   console.log(count);
   return count;
 };

const checkPalindrome = str => {
   let lowerStr = str.toLowerCase(); // Convert string to lowercase to make program case insensitive
   const reverseWord = lowerStr.split('').reverse().join(''); // Simultaneously convert string to individual array values then reverses position in the array and finally joins all elements in the array

   if(lowerStr == reverseWord) {
       return "is a palindrome";
   }
   else {
      return "is not a palindrome"
   }
};
// Output function values in template literal
console.log(`${word} contains ${vowelCount(word)} vowels and ${checkPalindrome(word)}`) 