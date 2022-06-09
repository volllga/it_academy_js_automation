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
    return `It is a dead heat!`;
  }
}

console.log(startGame('Nik', 'Vik'));


//2) Подсчитать как много Пятниц 13-го было с 01/01/2000 до сегодня.
function getCountDays (year, month, date) {
  let today = new Date();
  let yearFinish;

  // проверим, прошел ли нужный день в этом году или нет
  if(today.getMonth() > month - 1||    // месяц - индекс, февраль с индексом 1
    today.getMonth() === month - 1 && today.getDate() > date) {
    yearFinish = today.getFullYear() // если прошел
  } else {
    yearFinish = today.getFullYear() - 1; // если такой даты не было
  }

  let count = 0;
  while (yearFinish >= year) {
    let day = new Date(year, month - 1, date) //new Date(year, monthIndex, day)
    year += 1;
    if(day.getDay() === 5) { // пятница - 5
      count++;
    }
  }

  return console.log(`${count} time(s) was/were Friday 13th in this period.`);
}

getCountDays(2000,1,1);


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
    let part = Math.floor(Math.random() * (number - remainder)); // получаем целое рандомное число
    result.push(part);
    remainder = number - part;
    parts--;
  }
  result.push(number - result.reduce((a, b) => a + b, 0));

  return console.log(`${number} has parts: ${result.join(', ')}`);
}
splitNumber(15, 3);


// б) изначальное число целое, числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)
function splitNumber2(number, parts) {
  let remainder = 0;
  let result = [];
  while (parts - 1 > 0) {
    let part = Math.random() * number - remainder;
    part = Number(part.toFixed(2)); // получаем дробное рандомное число с двумя знаками после запятой
    result.push(part);
    remainder = number - part;
    parts--;
  }
  result.push(Number((number - result.reduce((a, b) => a + b, 0)).toFixed(2))); // нужно округлить до двух знаков

  return result;
  // return `${number} has parts: ${result.join(', ')}`; // it is return without tests
}
let number = 15;
let parts = 3;

console.log(splitNumber2(number, parts));

// tests for function splitNumber
console.log('sum of array', Number((splitNumber2(number, parts)
  .reduce((a, b) => a + b))
  .toFixed(0)) === number);
console.log('length of array', splitNumber2(number, parts).length === parts);