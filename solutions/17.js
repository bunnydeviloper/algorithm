const count9 = (n = [], index=0, counter=0) => {
    if (index === n.length) return counter;
    if (n[index] === 9) counter=counter+1;
    return count9 (n, index+1, counter);
};
module.exports = count9;
