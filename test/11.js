const find7m = require('../solutions/11.js');
const test = (testNumber, result) => {
  if (find7m(testNumber) === result) {
    console.log(`Next number divisible by 7 is ${result}`);
  } else {
    console.log('False test!')
  }
};

test(10,14); //true 14
test(-30, -28); //true -28
test(35,35); //true 35
test(35,21); //false test
