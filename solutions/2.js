const max3 = (num1, num2, num3) => {
  if (num1 > num2 && num1 > num3){
    max = num1;
    return max;
  }
  else if (num2 > num3){
    max = num2; 
    return max;
  }
  else{
    max = num3;
    return max;
  }
}

 module.exports = max3;
