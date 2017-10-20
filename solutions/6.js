const callX2 = (innerFunc, n, i = 0) => {
  if (i !== n) {
  innerFunc(i+1);
  callX2(innerFunc, n, i+1);
  }
};
module.exports = callX2;
