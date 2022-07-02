// 1) Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге по 3 раза.
// У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья.
function startGame(player1, player2) {
  let count = 0;
  let sumPlayer1 = 0;
  let sumPlayer2 = 0;

  while(count < 3) {
    let result1 = Math.floor(Math.random() * 6 + 1);
    let result2 = Math.floor(Math.random() * 6 + 1);
    sumPlayer1 += result1;
    sumPlayer2 += result2;
    count++;

    console.log(`${count} die roll: 
                            ${player1} has ${result1} points and the sum is ${sumPlayer1}
                            ${player2} has ${result2} points and the sum is ${sumPlayer2}`);
  }

  if(sumPlayer1 > sumPlayer2) {
    return `${player1} is a winner!`;
  } else  if (sumPlayer2 > sumPlayer1) {
    return `${player2} is a winner!`;
  } else {
    return "It is a dead heat!";
  }
}

console.log(startGame("Nik", "Vik"));


//2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.
function getCountDays (year) {
  let today = new Date();
  let monthFinish;

// проверим, было ли 13 число в этом месяце
  if(today.getDate() > 13) {
    monthFinish = today.getMonth(); // если прошел
  } else {
    monthFinish = today.getMonth() - 1; // если такой даты не было
  }

  let count = 0;
  while (today.getFullYear() >= year) { // итерации по годам, включая этот год
    let countOfMonth = 0;
    while (countOfMonth < 12) { // итерации по месяцам
      if (countOfMonth > monthFinish && today.getFullYear() === year) {
        break; // прерываем цикл, на месяце текущего года
      }
      let day = new Date(year, countOfMonth, 13); //new Date(year, monthIndex, day)
      if(day.getDay() === 5) { // пятница - 5
        count++;
      }
      countOfMonth += 1;
    }
    year += 1;
  }

  return console.log(`${count} times were Friday 13th in this period.`);
}

getCountDays(2000);


//3) Напишите код который будет разбивать число на заданное количество рандомных чисел,
// сумма которых будет равна изначальному числу.
// Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5)
// а) изначальное число целое, числа разбивки - целые (4,6,5)
// б) числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

// а) изначальное число целое, числа разбивки - целые (4,6,5)
function splitNumber(number, parts) {
  let remainder = 0;
  let result = [];

  while (parts - 1 > 0) {
    let part = Math.floor(Math.random() * (number / parts) + 1); // получаем целое рандомное число
    result.push(part);
    remainder = number - part;
    parts--;
  }
  result.push(number - result.reduce((a, b) => a + b, 0));

  return console.log(`${number} has parts: ${result.join(", ")}`);
}
splitNumber(100, 10);


// б) изначальное число целое, числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
function splitNumber2(number, parts) {
  let remainder = 0;
  let result = [];
  while (parts - 1 > 0) {
    let part = Math.random() * (number / parts) + 1;
    part = Number(part.toFixed(2)); // получаем дробное рандомное число с двумя знаками после запятой
    result.push(part);
    remainder = number - part;
    parts--;
  }
  result.push(Number((number - result.reduce((a, b) => a + b, 0)).toFixed(2))); // нужно округлить до двух знаков

  return result; // возвращаем массив, чтобы проверить тестами (смотри ниже)
  // return `${number} has parts: ${result.join(', ')}`; // it is return without tests
}
let number = 100;
let parts = 10;

console.log(splitNumber2(number, parts));

// tests for function splitNumber
console.log("sum of array", Number((splitNumber2(number, parts)
  .reduce((a, b) => a + b))
  .toFixed(0)) === number);
console.log("length of array", splitNumber2(number, parts).length === parts);
