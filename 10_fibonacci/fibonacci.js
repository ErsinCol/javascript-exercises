const fibonacci = function (memberIndex) {
  if (typeof memberIndex === "string") memberIndex = parseInt(memberIndex);
  if (memberIndex === 0) return 0;
  if (memberIndex < 0) return "OOPS";

  let arr = [];
  for (let index = 0; index < memberIndex; index++) {
    if (index === 0 || index === 1) {
      arr[index] = 1;
    } else {
      arr[index] = arr[index - 1] + arr[index - 2];
    }
  }
  return arr[memberIndex - 1];
};

// Do not edit below this line
module.exports = fibonacci;
