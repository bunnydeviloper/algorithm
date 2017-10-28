const gcd = require('../solutions/9.js');
const test = (number1, number2, result) => {
  if (gcd(number1, number2) === result) {
    console.log(`Greatest common divisor is ${result}`);
  } else {
    console.log('False test!');
  }
};

test(77, 7, 11); //false
test(66, 55, 11); //true 11
test(10, 100, 11); //false
test(3, 6, 3); //true 3
