//Решить используя промисы и async/await
//Сделайте 3 промиса, в каждом из которых расположена функция setTimeout
//со случайной задержкой от 1 до 5 секунд.
//Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
//С помощью Promise.race дождитесь загрузки первого сработавшего промиса и
//выведите результат его работы на экран.
//Task 1. Option 1
function gerRandom() {
  return Math.floor(Math.random() * 5) + 1;
}

let promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, gerRandom(), 1);
});

let promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, gerRandom(), 2);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, gerRandom(), 5);
});

Promise.race([promise1, promise2, promise3])
  .then((result) => {
  console.log(result)
});


//Task 1. Option 2
let arr = [];
function waitSomeTime(num) {
  let time = gerRandom();
  setTimeout(() => {
    console.log(`got the ${num} in ${time} seconds`);
    arr.push(num);
  }, time * 1000);
}

async function imitateRace(arr) {
  await waitSomeTime(1);
  await waitSomeTime(2);
  await waitSomeTime(5);
  await setTimeout(() => {
    console.log(arr[0]);
  }, 6000);
}

imitateRace(arr);


//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
//Создайте async функцию, которая с помощью await будетдожидаться результата getNum,
//затем возводить его в квадрат и выводить на экран.
//Task 2

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(gerRandom());
    }, 3000);
  });
}

async function getSquare() {
  let result = await getNum();
  return console.log('task 2 result', result * result);
}

getSquare();


// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1,
// затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.
//Task 2

function gerRandom2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum1(min, max, time) {  // эта функция заменяет две: getNum1 И getNum2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = gerRandom2(min, max);
      resolve(num);
      console.log('task 3 interim result', num);
    }, time)
  })
}

async function getSumOfNumbers() {
  let result1 = await getNum1(1, 5, 3000);
  let result2 = await getNum1(6, 10, 5000);
  return console.log('task 3 result', result1 + result2);
}

getSumOfNumbers();