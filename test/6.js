const callX2 = require('../solutions/6.js');

const testing = (testNum) => {
  if (testNum <0) { //may remove line 4,5,6,7 if not going to test NEG
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
  callX2(innerFunc, testNum);
  if (parameter && repeat === testNum) {
    console.log(`Correct. Repeated ${testNum} times`);
  } else {
    console.log('Check your code again!');
  }
};

testing(10);
testing(0);
testing(-1);
