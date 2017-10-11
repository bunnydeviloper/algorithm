const solution = require('../solutions/1.js');

const test = (num1,num2,result) => {
  if(solution(num1, num2) === result) {
    console.log(`Correct`);
  } else {
    console.log(`Wrong. Expected:`, result);
  }
};

test(5,6, 11);
test(1,-4,-3);
test(2,3,6);
