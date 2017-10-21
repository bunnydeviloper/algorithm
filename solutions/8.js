const isPrime = (number, i=2) => {
  if (number === i) {
    return true;
  }
  if (number % i === 0){
    return false;
  }
  return isPrime(number, i+1);
};

module.exports = isPrime;

