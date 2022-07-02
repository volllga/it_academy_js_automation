// Сделайте функцию getNum1, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Сделайте также функцию getNum2, которая возвращает промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum1,
// затем будет дожидаться результата getNum2, а затем найдет сумму полученных чисел и выводит на экран.

function gerRandom2(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getNum(min, max, time) {  // эта функция заменяет две: getNum1 И getNum2
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = gerRandom2(min, max);
      resolve(num);
      console.log(num);
    }, time);
  });
}

async function getSumOfNumbers() {
  let result1 = await getNum(1, 5, 3000);
  let result2 = await getNum(6, 10, 5000);
  return console.log(result1 + result2);
}

getSumOfNumbers();