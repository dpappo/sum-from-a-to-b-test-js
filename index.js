const sum = function(fromN, toN) {
  let totSum = 0;

  //recursive case
  if (fromN <= toN) {
    totSum += fromN;
    totSum += sum(fromN + 1, toN);

    //base case
  } else {
    return totSum;
  }

  return totSum;

};

console.log(sum(3, 7));

module.exports = sum;
