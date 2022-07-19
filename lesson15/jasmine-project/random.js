let intRandom = function() {
  return Math.floor(Math.random() * (200) - 100);
};

let floatRandom = function() {
  return Math.random() * (2000) - 1000;
};

function boolRandom() {
  return (Math.floor(Math.random() * 2) === 0);
}

function exponRandom() {
  return (Math.random() * (20000000000000) - 10000000000000).toExponential();
}

// console.log(exponRandom());

module.exports = { intRandom, floatRandom, boolRandom, exponRandom };

