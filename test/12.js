const factorial = require('../solutions/12.js');
const test = (testNumber, result) => {
  if (factorial(testNumber) === result) {
    return true;
  } else {
    return false;
  }
};

console.log(test(5,120)); //true
console.log(test(0,0)); //false
console.log(test(1,1)); //true

