const callX = require('../solutions/5.js');

const test = (callTotal, callTest) => {
  let i = 0;
  const fun = () => {
    i++;
  };
  callX(fun, callTotal);
  if (i === callTest) {
    console.log(`Function sucessfully repeated ${i} times.`);
  } else {
    console.log('Check your code again!');
  }
};

test(4,7);
test(10,10);
test(-1,1);
