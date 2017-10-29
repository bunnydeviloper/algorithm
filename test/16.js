const kebabCase = require('../solutions/16.js');
const test = (string, result) => {
  if (kebabCase(string) === result) {
    console.log('Yay it works.');
  } else {
    console.log('Check again.');
  }
};

test('iAmAHappyBunny', 'i-am-a-happy-bunny'); //yay it works
test('iAmAHappyBunny', 'I-am-A-happy-bunny'); //check again

