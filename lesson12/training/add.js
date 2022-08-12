export function add(a, b) {
  if (arguments.length === 0) {
    return add;
  }
  if (arguments.length === 1) {
    return function subFunction(subB) {
      if (arguments.length === 0) {
        return subFunction;
      }
      return a + subB;
    };
  }
  return a + b;
}

console.log(add());
console.log(add(5));
console.log(add(5, 7));

let a = add(5);
console.log(a(8));