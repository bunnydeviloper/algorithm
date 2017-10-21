const gcd = (number1, number2, i=0) => {
  const min = Math.min(number1, number2);
  if ((number1 % (min-i) === 0) && (number2 % (min-i) === 0)) {
    return min-i;
  }
  return gcd(number1, number2, i+1);
};
module.exports = gcd;




/* 2nd way to solve problem:

const gcd = (number1, number2, i=1) => {
  if (i > number1 && i > number2) {
    return solutionResult;
  }
  if ((number1 % (i) === 0) && (number2 % (i) === 0)) {
    solutionResult=i;
}
  return gcd(number1, number2, i+1);
};
module.exports = gcd;

console.log(gcd(66, 55));
*/
