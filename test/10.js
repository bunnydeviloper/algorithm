const callFuncBigger = require('../solutions/10.js');

const testing = (testNum1, testNum2) => {
  const max = Math.max(testNum1, testNum2);
  if (max<0) { 
    //may remove this part if not going to test NEG
    console.log('Cannot use negative number.');
    return;
  }
  let repeat = 0;
  let parameter = true;
  const innerFunc = (x) => {
    repeat = repeat + 1;
    if (x !== repeat) {
      parameter = false;
    }
  };
  callFuncBigger(innerFunc, max);
  if (parameter && repeat === max) {
    console.log(`Correct. Repeated ${max} times`);
  } else {
    console.log('Check your code again!');
  }
};

testing(10, 13);
testing(0, 8);
testing(-1, 2);
