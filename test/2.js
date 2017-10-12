const max3 = require('../solutions/2.js');

const test = (num1, num2, num3, result)=> {
  if(max3(num1, num2, num3) === result) {
    console.log('You are correct,', result, 'is the biggest number. Yay!');
  } else {
    console.log('Result not correct, check your code again.', result, 'is not the biggest of the three:', num1, num2, num3);
  }
}

test(1,2,3, 3);
test(-1, 0, 1, 0);
test(10, -20, 30, 30);

// to run it below, type: :! node 2.js
