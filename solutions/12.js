const factorial = (number) => {
  if (number === 0) {
    return 1; 
  }
  return number * factorial(number-1);
};
module.exports = factorial;


// add this if wanna test negative number
// if (number < 0) {return;}

/* 2nd way to solve problem
-> more preferable since it takes less memorie

const factorial = (number, i=number-1) => {
  if (number === 0) {
    return 1;
    }
  if (i === 0) {
    return number;
    }
  number = number * i;
  return factorial(number, i-1);
};
  
*/
