const createObjectFromArray = (inputArray, newObject={}, newObjectKey, i=0) => {
  if (i >= inputArray.length) return newObject;
  if (i < inputArray.length) {
    newObjectKey = inputArray[i];
    if (!newObject[newObjectKey]) newObject[newObjectKey] = 0;
    // runs if newObject[newObjectKey] is fasle, 0, '', NaN, null or undefined
  }
  newObject[newObjectKey]+= 1;
  return createObjectFromArray(inputArray, newObject, newObjectKey, i+1);
};
module.exports = createObjectFromArray;

//will use biggestValue func in prob#22 to find key associated with max value
