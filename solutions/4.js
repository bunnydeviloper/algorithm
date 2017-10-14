const jump = (str, num, newstr='', i=0)=>{
  if (i==num){
    return newstr;
  }
  console.log(str);
  newstr = newstr + str;
  return jump(str, num, newstr, i+1);
}
module.exports = jump;


