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
    console.log(result);
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
