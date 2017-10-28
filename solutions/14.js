const isPrime = require('../solutions/8.js');
const primeArray = (n, array = []) => {
  if (n > 1) {
    if (isPrime(n) === true) {
      array.unshift(n);//unshift = push, but reverse order
    }
    return primeArray(n-1, array);
  } 
    return array;
};
module.exports = primeArray;
