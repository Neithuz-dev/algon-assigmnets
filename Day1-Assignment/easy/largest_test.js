const findLargestElement =require('./findLargestElement');
const prompt =require('prompt-sync')();

let input = parseInt(prompt("Enter array elements"));
let arr =[];
for (let i = 0; i < input; i++) {
  let num = parseFloat(prompt(`Enter element ${i + 1}:`));
  arr.push(num);
}
let result = findLargestElement(arr);
console.log("Largest element is: " + result);