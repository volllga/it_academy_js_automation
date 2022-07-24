export function map(mapper, input) {
  if (arguments.length === 0) {
    return map;
  }
  if (arguments.length === 1) {
    return function subFunction(subInput) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return subInput.map(mapper);
    };
  }
  return input.map(mapper);
}

function mapper(a) {
  return a * a;
}

console.log(map); // [Function: map]
console.log(map(mapper), typeof map); // [Function: subFunction]
console.log(map(mapper, [1, 2, 3])); // [ 1, 4, 9 ]




