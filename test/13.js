const customTimeout = require ('../solutions/13.js');
const test = (testNumber) => {
  let i=0;
  const countFun = () => {
    i++;
    if (i === testNumber) {
      console.log(`Correct! Function repeated ${testNumber} times every second.`);
    } else {
      console.log(`Function repeated ${i} times.`);
    }
  };
  customTimeout(countFun, testNumber);
};
test(5);
