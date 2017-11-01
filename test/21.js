//const findMax = require('../solutions/21.js');
const findMax = (linkedlistNODE, headNODE, max = linkedlistNODE.value) => {
  if (!linkedlistNODE.next || linkedlistNODE.next === headNODE) return max;
  if (linkedlistNODE.value > max) max = linkedlistNODE.value;
  console.log(max);
  return findMax(linkedlistNODE.next, headNODE,max);
};
//module.exports = findMax;

const test = (testLLNODE, result) => {
  findMax(testLLNODE, testLLNODE) === result ? console.log('Correct') : console.log('Check again');
  console.log(findMax(testLLNODE, testLLNODE));
};


//LinkedList case 1:
const d = {value: 9};
const c = {value: 4, next:d};
const b = {value: 2, next:c};
const a = {value:-1, next:b};
d.next = a;

test(a,9); //Correct

/*
//LinkedList case 2:
const theAwesomeNode = {
  value:1, next:{
                value:-2, next:{
                              value:7, next:{
                                            value:4, next: null}}}};

test(theAwesomeNode, 7); //Correct

//LinkedList case 3:
const singularLL = {value:5, next:null};


test(singularLL, 5); //Correct
test(singularLL, 3); //Check again

*/
