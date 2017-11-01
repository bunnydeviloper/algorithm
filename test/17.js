const count9 = require('../solutions/17.js');
const test = (array, result) => {
  if (count9(array) === result) {
    console.log(`Correct! Number 9 appears ${result} times in [${array}]`);
  } else {
    console.log('Wrong! Check again!');
  }
};
test([9], 1);           //correct
test([9,3,9,10,9], 3);  //correct
test([1,2,3,4,5,9], 2); //check again

