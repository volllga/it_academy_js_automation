// 1. Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр.
// Если это так - выведите 'да', в противном случае выведите 'нет'.
const str = "287854";

let first = str.slice(0, str.length / 2)  // получим индекс 3, он не включается в возвращаемый массив
                .split("")
                .reduce((a, b) => Number(a) + Number(b));

let second = str.slice(str.length / 2)
                .split("")
                .reduce((a, b) => Number(a) + Number(b));

if(first === second) {
  console.log("да");
} else {
  console.log("нет");
}


// 2. Дано число n=1000. Делите его на 2 столько раз, пока результат деления не станет меньше 50.
// Какое число получится? Посчитайте количество итераций,
// необходимых для этого (итерация - это проход цикла), и запишите его в переменную num.
let n = 1000;
let num = 0;
while(n > 50) {
  n = n / 2;
  num += 1;
}
console.log(`Получилось число ${n} за ${num} итераций.`); //Получилось число 31.25 за 5 итераций.


//Option 2.1. Function implementation
function divideNumber(num, limit) {
  let count = 0;
  let result = num;
  while(result > limit) {
    result = result / 2;
    count += 1;
  }
  return `Получилось число ${result} за ${count} итераций.`; //Получилось число 31.25 за 5 итераций.
}

console.log(divideNumber(1000, 50));


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
arr2.splice(3, 0, "a", "b", "c");
console.log(arr2);


// 5. Дан массив [1, 2, 3, 4, 5]. Cделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//OPTION 5.1
const arr3 = [1, 2, 3, 4, 5];
function insertElementIntoArray(arr, index, arrInsert) {
  for(let element of arrInsert) {
    arr.splice(index, 0, element);
    index += 1;
  }
  return arr;
}
insertElementIntoArray(arr3, 1, ["a", "b"]);
insertElementIntoArray(arr3, 6, ["c"]);
insertElementIntoArray(arr3, 8, ["e"]);
console.log(arr3);


//OPTION 5.2 Not the best solution: doesn't work with numbers > 9.
const arr5 = [1, 2, 3, 4, 5];
const str5 = arr5.join("")[0] + "ab"
            + arr5.join("").slice(1, 4) + "c"
            + arr5.join("").slice(-1) + "e";
let newArr5 = [];

for(let i = 0; i < str5.length; i++) {
  if("1234567890".includes(str5[i])) {
    newArr5.push(Number(str5[i]));
  } else {
    newArr5.push(str5[i]);
  }
}
console.log(newArr5);


// 6. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его.
let arr4 = [3, 4, 1, 2, 7];
console.log(arr4.sort((a, b) => a - b)); // [1, 2, 3, 4, 7]
console.log(arr4.sort((a, b) => b - a)); // [ 7, 4, 3, 2, 1 ]
