const strHas = (string, c, i=0) => {
  if (i > string.length-1) return false;
  if (string[i] === c) return true;
  return strHas(string, c, i+1);
};
module.exports = strHas;

