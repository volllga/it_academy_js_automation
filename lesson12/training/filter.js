export function filter(filterer, input) {
  if (arguments.length === 0) {
    return filter;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.filter(filterer);
    };
  }
  return input.filter(filterer);
}

function  filterer(x) {
  return  x < 6;
}

console.log(filter());
console.log(filter(filterer, [2, 5, 7, 1, 9]));