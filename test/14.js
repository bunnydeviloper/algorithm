const primeArray = require('../solutions/14.js');
const test = (testNumber, testArray = []) => {
  if (JSON.stringify(primeArray(testNumber)) === JSON.stringify(testArray)) {
    console.log('Yay, it works.');
  } else {
    console.log('Something is wrong...');
  }
};
test(5, [2,3]);         //wrong result
test(10, [2,3,5,7]);    //correct result

