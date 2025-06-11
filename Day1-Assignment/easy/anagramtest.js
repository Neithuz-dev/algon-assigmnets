const prompt = require('prompt-sync')();
const isAnagram = require('./isAnagram');

const str1 = prompt("Enter the first word: ");
const str2 = prompt("Enter the second word: ");

const result = isAnagram(str1, str2);
console.log(`It is ${result}`);
