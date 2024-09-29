const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((sum, value) => sum + value, 0);
};

const multiply = function(arr) {
  if(arr.length === 0)
    return 0;
  return arr.reduce((total, value) => total*value);
};

const power = function(basis, exponent) {
	return Math.pow(basis, exponent);
};

const factorial = function(num) {
	let total = 1;
  for(let i = 1; i <= num; i++){
    total *= i;
  }
  return total;
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
