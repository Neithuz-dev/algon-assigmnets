/*
  rou
*/
const prompt = require('prompt-sync')();
class Calculator {
  constructor() {
    this.result = 0;
  }

  add(number) {
    this.result += number;
  }

  subtract(number) {
    this.result -= number;
  }

  multiply(number) {
    this.result *= number;
  }

  divide(number) {
    if (number === 0) {
      throw new Error("Division by zero is not possibile.");
    }
    this.result /= number;
  }

  clear() {
    this.result = 0;
  }

  getResult() {
    return this.result;
  }
calculate(expression) {
      let exp=expression.replace(/\s+/g, '');
      if (/[^0-9+\-*/().]/.test(exp))
      {
        throw new Error("Invalid characters in expression.");
      }
      this.result = eval(exp);
  }
}
let calc = new Calculator();
while(true)
try {
  let expr=prompt("Enter an expression");
  calc.calculate(expr);
 console.log("Result " + calc.getResult());

  let clearexp = prompt("Clear result? (yes/no)");
  if (clearexp.toLowerCase() === "yes") {
    calc.clear();
    console.log("Result after clear" , calc.getResult());
    console.log("exiting.....")
    break;
    } else if (clearexp.toLowerCase() === "no") {
      console.log("Continuing with result:", calc.getResult());
    } else {
      console.log("Invalid response");
      break;
    }
  }
 catch (err) {
  console.log("Error: " + err.message);
  break;
 }
module.exports = Calculator;
