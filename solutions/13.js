const customTimeout = (fun, n) => {
  if (n > 0) {
    setTimeout(() => {
        fun();
        customTimeout(fun, n-1);
      }, 1000);
  }
};
module.exports = customTimeout;
