const find7m = (number, i = number+1) => {
  if (i % 7 === 0) {
    return i;
  }
  return find7m(number, i+1);
};
module.exports = find7m;


