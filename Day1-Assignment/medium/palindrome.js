/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/
  const prompt = require('prompt-sync')();
function isPalindrome(str) {
  let reversed = str.split('').reverse().join('');
  let hasUpper = /[A-Z]/.test(str);
  let hasLower = /[a-z]/.test(str);

if (hasUpper && hasLower) {
  console.log("it is case sensitive");
    return false; 
  } 
  else if (str === reversed)
     {
    return true;
  } else 
  {
    return false;
  }
}


let i = prompt("Enter a string: ");
let result = isPalindrome(i);
console.log("Is is " + result);
module.exports = isPalindrome;
