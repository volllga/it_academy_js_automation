// Домашнее задание - Занятие 8
// 1) поменять массив в обратном порядке - [1,2,3,4,5,6] [6,5,4,3,2,1]
//Option 1.1
function reverseArr(arr) {
  return arr.reverse();
}

console.log('Задача 1.2:', reverseArr([1,2,3,4,5,6]));

//Option 1.2
function reverseArr1(arr) {
  let newArr = [];
  while (arr.length > 0){
    newArr.push(arr.pop());
  }
  return newArr;
}

console.log('Задача 1.2:', reverseArr1([1,2,3,4,5,6]));


// 2) найти максимальное значение числа в массиве ([3,67,15...])
function getMax(arr) {
  return arr.sort((a, b) => b - a).shift();
}

console.log('Задача 2:', getMax([3, 67, 15, 4, 26]));


// 3) записать в массив ряд фибаначи начиная с N члена с длинной массива M
// Option 3.1 with for
function getFibonacciNumbers(start, range) { // start не индекс, а порядковый номер члена
  let arr = [0, 1];

  if(start < 1 || typeof start !== 'number') { // проверим валидность аргументов
    return `Please enter an integer > 0 for start and integer range.`;
  }

  for(let i = 2; arr.length < range + start; i++) {
    num = arr[i-1] + arr[i-2];
    arr.push(num) // ряд Фибоначчи от 0 до N+M члена
  }

  return arr.slice(start - 1, range + start - 1);
}

console.log('Задача 3.1:', getFibonacciNumbers(3, 7));


// Option 3.2 with recursion. Сомнительная опция, так как рекурсия на длинных рядах
// быстро переполняет стек вызова. Рекурсия, вроде, короче и читабельнее, но не в моих руках))))

function getFibonacciNumbers2(start, range) { // start не индекс, а порядковый номер члена
  let arr = [0, 1];

  if(start < 1 || typeof start !== 'number') { // проверим валидность аргументов
    return `Please enter an integer > 0 for start and integer range.`;
  }
  fillFibonacciRow(arr, start + range);

  function fillFibonacciRow(arr, length) {
    num = arr[arr.length - 1] + arr[arr.length - 2];
    arr.push(num) // ряд Фибоначчи от 0 до N+M члена
    if(arr.length < length) {
      return fillFibonacciRow(arr, length)
    }
    return arr;
  }

  return arr.slice(start - 1, range + start - 1);
}

console.log('Задача 3.2:', getFibonacciNumbers2(5, 7));


// 4) даны 2 4-хзначных числа с неповторяющимися цифрами,
// надо определить сколько цифр в этих числах совпадают
// по значению и позиции и сколько только по значению (3487 и 3794 ---> 1 и 2 )
function checkMatches(num1, num2) {
  let matchNum = 0;
  let mathPosition = 0;
  num1 = String(num1);
  num2 = String(num2);

  checkStringIncludes(0)

  function checkStringIncludes(index) {
    if(num2.includes(num1[index])) {
      matchNum++;
      if(num1.indexOf(num1[index]) === num2.indexOf(num1[index])) {
        mathPosition++;
      }
    }
    if(index < num1.length) {
      index++;
      checkStringIncludes(index); // тренируемся использовать рекурсию
    }
  }

  return mathPosition + ' и ' + matchNum;
}

console.log('Задача 4:', checkMatches(3487, 3794));


// 5) сортировка массива по возрастанию/убыванию
function sortArr(arr) {
  return arr.sort() + "\n" + arr.sort().reverse();
}

console.log('Задача 5:', sortArr(['abv', 'sd', ' ', 54, 7, 71]))


// 6) удалить из массива все повторяющиеся элементы

function deleteMatches(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log('Задача 6:', deleteMatches([4, 7, 5, 0, 4, 8 ,5 , 8, 2 ,8, 0, 0]));
// * все действия и переборы стараться выполнять методами конструктора Array и Object,
// для каждой задачи должна быть написана функция, которая будет универсальной.
//   макс 10