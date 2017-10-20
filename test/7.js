const getDivisors = require('../solutions/7.js');

const test = (testNumber, trueResult) => {
  if (getDivisors(testNumber) === trueResult) {
    console.log(`Largest divisor of ${testNumber} is ${trueResult}`);
  } else {
    console.log('Check your code again');
  }
};

test(10,5);
test(20,20);
test(35,7);
test(55,10);

