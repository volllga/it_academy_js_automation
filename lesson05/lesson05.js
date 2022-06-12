let str = 'this year ';
let num = 2022;
let bool = true;
let nul = null;

console.log('*** Task 1:');
console.log(str + bool); // this year true
console.log(str + num); // this year 20220
console.log(num + bool); // 2023

console.log('*** Task 1-extra:');
console.log(num + nul); // 2022
console.log(str + nul); // this year null
console.log(bool + nul); // 1
console.log('2' + '5'); // '25'
console.log(2 + '5'); // '25'

console.log('*** Task 2:');
console.log(str * bool); // NaN
console.log(str * num); // NaN
console.log(num * bool); // 2022

console.log('*** Task 2-extra:');
console.log(num * nul); // 0
console.log(str * nul); // NaN
console.log('2' * '5'); // 10
console.log('2' * 5); // 10

console.log('*** Task 3:');
console.log(str / bool); // NaN
console.log(str / num); // NaN
console.log(num / bool); // 2022

console.log('*** Task 3-extra:');
console.log('33' / 11); // 3
console.log('33' / '11'); // 3
console.log('33' / false); // Infinity
console.log('33' / nul); // Infinity

console.log('*** Task 4a (to Number):');
console.log(typeof Number(str), Number(str)); // number NaN
console.log(typeof Number(bool), Number(bool)); // number 1
console.log(typeof Number(nul), Number(nul)); // number 0
console.log(typeof Number('96.04'), Number('96.04')); // number 96.04

console.log('*** Task 4b (to String):');
console.log(typeof String(num), String(num)); // string 2022
console.log(typeof String(bool), String(bool)); // string true
console.log(typeof String('96'), String('96')); // string 96
console.log(typeof bool.toString(), bool.toString()); // string true
console.log(typeof '96'.toString(), '96'.toString()); // string 96
console.log(typeof (507).toString(), (507).toString()); // string 507

console.log('*** Task 4c (to Boolean):');
console.log(typeof Boolean(num), Boolean(num)); // boolean true
console.log(typeof Boolean(str), Boolean(str)); // boolean true
console.log(typeof Boolean(''), Boolean('')); // boolean false
console.log(typeof Boolean(0), Boolean(0)); // boolean false
console.log(typeof Boolean(nul), Boolean(nul)); // boolean false