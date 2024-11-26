const add = function(pNum1, pNum2) {
	return pNum1 + pNum2;
};

const subtract = function(pNum1, pNum2) {
	return pNum1 - pNum2;
};

const sum = function(pArray) {
	return pArray.reduce((total, currentValue) => {
    return total + currentValue;
  }, 0);
};

const multiply = function(pArray) {
  let res = 1;
  for (let index = 0; index < pArray.length; index++) {
    res = res * pArray[index];
  }
  return res
};

const power = function(pNum1, pNum2) {
	return Math.pow(pNum1, pNum2);
};

const factorial = function(pNum) {
  let res = pNum;
  if(pNum === 0 || pNum === 1) {
    res = 1; 
  }
	for (let index = pNum-1; index > 0; index--) {
    res *= index;
  }
  return res;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
