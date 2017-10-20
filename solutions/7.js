const getDivisors = (number, i=1) => {
  if ((number%(number - i)) === 0) {
    return (number - i);
  }
  return getDivisors(number, i+1);
};

module.exports = getDivisors;



