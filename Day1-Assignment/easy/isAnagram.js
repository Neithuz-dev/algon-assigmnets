/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
const prompt = require('prompt-sync')();
function isAnagram(str1, str2) {
str1 = str1.toLowerCase();
str2 =str2.toLowerCase();

str1=str1.replace(/[^a-z0-9]/g,'');
str2=str2.replace(/[^a-z0-9]/g,'');

if (str1.length !== str2.length) {
    return false;
}
let str1Arr=str1.split('').sort();
let str2Arr=str2.split('').sort();

for(i=0;i<str1Arr.length;i++)
{
  if(str1Arr[i]!==str2Arr[i]){
    return false;
  }
}

return true;
}
const str1 = prompt("Enter the first word: ");
const str2 = prompt("Enter the second word: ");

const result = isAnagram(str1, str2);
console.log(`It is ${result}`);

module.exports = isAnagram;
