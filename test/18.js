const createObjectFromArray = require('../solutions/18.js');
const biggestValue = require('../solutions/22.js');
const test = (testArray, result) => {
  if (biggestValue(createObjectFromArray(testArray)) === result) {
    console.log(`You are correct, most common value is ${result}.`);
  } else {
    console.log('Check again');
  }
};
test([1,2,3,3,4,0], "3");                                     //correct
test([-1,"hello", "hello", "hello other side", 5], "hello");  //correct
test([-4,7, 5], "5");                                         //false
