/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/
const prompt =require('prompt-sync')();
function findLargestElement(numbers) {

  if (numbers.length === 0){
    return undefined
  }
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}
let input = parseInt(prompt("Enter array elements"));
let arr =[];
for (let i = 0; i < input; i++) {
  let num = parseFloat(prompt(`Enter element ${i + 1}:`));
  arr.push(num);
}
let result = findLargestElement(arr);
console.log("Largest element is: " + result);
module.exports = findLargestElement;