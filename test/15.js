const strHas = require('../solutions/15.js');
const test = (string, c, result) => {
  if (strHas(string, c) === result) {
    console.log("Code is correct!");
  } else {
    console.log("Check code again");
  };
};
test("hello", "e", true);   //true===true, code is correct
test("hello", "a", false);  //false===false, code is correct
test("hello", "a", true);   //false != true, check again
