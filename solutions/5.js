const callX = (fun, n) => {
  if (n > 0) {
  fun();
  callX(fun, n-1);
  }
};
module.exports = callX;

