const isPrime = require('../solutions/8.js');

const test = (testNumber) => {
  if (isPrime(testNumber)  === true) {
    return true;
  } else {
    return false;
  }
};

console.log(test(11)); //true;
console.log(test(35)); //false
console.log(test(2));  //true
