const findMax = (linkedlistNODE, head, max = linkedlistNODE.value) => {
  if (!linkedlistNODE.next || linkedlistNODE.next === head) return max;
  if (linkedlistNODE.value > max) max = linkedlistNODE.value;
  return findMax(linkedlistNODE.next, head, max);
};
module.exports = findMax;
