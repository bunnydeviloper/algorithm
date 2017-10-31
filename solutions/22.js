const biggestValue = (myObject, keyArray= Object.keys(myObject), i=0, max=0) => {
    // max can also = myObject[keyArray[0]]
  if (i === keyArray.length) return keyAtMaxValue;
  if (myObject[keyArray[i]] >= max) {
    max = myObject[keyArray[i]];   //max=value of myObject at index i
    keyAtMaxValue = keyArray[i]
  }
  return biggestValue(myObject, keyArray, i+1, max);
};
module.exports = biggestValue;
