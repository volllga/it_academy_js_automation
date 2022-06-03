// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
const str = '287854';

let first = str.slice(0, str.length / 2)
                .split('')
                .reduce((a, b) => Number(a) + Number(b));

let second = str.slice(str.length / 2)
                .split('')
                .reduce((a, b) => Number(a) + Number(b));

if(first === second) {
  console.log('да');
} else {
  console.log('нет');
}


// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let n = 1000;
let num = 0;
while(n > 50) {
  n = n / 2;
  num += 1
}
console.log(`Получилось число ${n} за ${num} итераций.`); //Получилось число 31.25 за 5 итераций.


// 3. Дан массив arr. Найдите среднее арифметическое его элементов.
// Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79.
let arr = [12, 15, 20, 25, 59, 79];

function averageOfElements(arr) {
  let sum = 0;
  for(let element of arr) {
    if(typeof element === "number") {
      sum += element;
    } else {
       return `We need an array of numbers! But "${element}" isn't a number.`;
    }
  }
  return sum / arr.length;
}

console.log(averageOfElements(arr)); // 35


// 4. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
let arr2 = [1, 2, 3, 4, 5];
arr2.splice(3, 0, 'a', 'b', 'c');
console.log(arr2);


// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
let arr3 = [1, 2, 3, 4, 5];
function insertElementIntoArray(arr, index, arrInsert) {
  for(let element of arrInsert) {
    arr.splice(index, 0, element);
    index += 1;
  }
  return arr;
}
insertElementIntoArray(arr3, 1, ['a', 'b']);
insertElementIntoArray(arr3, 6, ['c']);
insertElementIntoArray(arr3, 8, ['e']);
console.log(arr3);


// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr4 = [3, 4, 1, 2, 7];
console.log(arr4.sort((a, b) => a - b));
