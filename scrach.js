const str = 'one, two, three';
const str1 = 'something';

console.log(str);
console.log(str.split(', '));
console.log(str1.split('').join('-'));

const car = {
  brand: 'Ford',
  model: 'Mustang',
  year: 1969
}

for(let key in car){
  console.log(key, car[key]);
}