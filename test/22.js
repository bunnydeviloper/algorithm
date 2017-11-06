const biggestValue = require('../solutions/22.js');
const test = (result, testObject) => {
  if (result === biggestValue(testObject)) {
    console.log('Biggest value is ' , result);
  } else {
    console.log('Not correct ' , testObject);
  }
};

test(5, {10:3, 5:0, 4:1}); //not correct
test("Biggg Baby", {"-1":0, 5:3, 'Biggg Baby':10}) //correct

