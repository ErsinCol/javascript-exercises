const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((sum, currentValue) => sum + currentValue, 0);
};

const multiply = function (arr) {
  return arr.reduce((result, currentValue) => result * currentValue, 1);
};

const power = function (number, power) {
  return Math.pow(number, power);
};

const factorial = function (number) {
  let result = 1;

  if (number === 0 || number === 1) {
    return result;
  }

  for (let index = number; index > 0; index--) {
    result *= index;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
