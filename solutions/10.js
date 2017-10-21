const callFuncBigger = (innerFunc, number, i = 0) => {
  if (i !== number) {
    innerFunc(i+1);
    callFuncBigger(innerFunc, number, i+1);
  }
};
module.exports = callFuncBigger;
