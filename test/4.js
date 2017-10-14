const jump = require('../solutions/4.js');

const test=(str, num, result) => {
  if (jump(str, num)==result) {
    console.log("String repeated succesfully ", num, " times.");
  } else {
    console.log("Check your code or test result again.");
  }
};

// test to give correct result
test('bunnyjump', 2, 'bunnyjumpbunnyjump');

// tests to give wrong results
test('jumphigher', 2, 'jumphigherjumphigherjumphigher');
test('jump', 3, 'jumpjump');
