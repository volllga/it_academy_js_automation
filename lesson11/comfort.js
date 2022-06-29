class Comfort {
  constructor() {
    // Базовая стоимость
    this.cost = function() {
      return 20000;
    }
  }
}
// Функция-декоратор
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  }
}
// Функция-декоратор
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 2000;
  }
}
// Функция-декоратор
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function() {
    return prevCost + 500;
  }
}