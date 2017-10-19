const jump = (str, num, newstr='', i=0)=>{
  if (i==num){
    return newstr;
  }
  return jump(str, num, newstr + str, i+1);
};
module.exports = jump;


