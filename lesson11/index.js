//Таксопарк. Определить иерархию легковых автомобилей.
// Создать таксопарк.
// Посчитать стоимость автопарка.
// Провести сортировку автомобилей парка по расходу топлива.
// Найти автомобиль в компании, соответствующий заданному диапазону параметров.

import {TaxiCompany} from './taxiCompany.js';
import {Auto, Comfort, ComfortPlus, Children, Minivan} from './auto.js';
import {getAutoByRange} from './getAutoByRange.js';

let myCompany = new TaxiCompany(); // Создать таксопарк.

//Таксопарк. Определить иерархию легковых автомобилей.
let c01BMV = new Comfort('BMW', 2017, 20000, 11000, 2.1, 5);
let cp02VW = new ComfortPlus('Volkswagen', 2019, 21500, 18800, 1.4, 5);
let e03VW = new Auto('Volkswagen', 2013, 11200, 28800, 1.3, 5);
let ch04VW = new Children('VW', 2015, 10200, 25700, 1.4, 5);
let m05HY = new Minivan('Hyundai', 2001, 3700, 425000, 2.5, 7);
let e06LA = new Auto('Lada', 2017, 3200, 230800, 1.2, 5);

myCompany.addAuto(c01BMV);
myCompany.addAuto(cp02VW);
myCompany.addAuto(e03VW);
myCompany.addAuto(ch04VW);
myCompany.addAuto(m05HY);
myCompany.addAuto(e06LA);

// console.log(myCompany);
console.log(myCompany.totalPrice); // Посчитать стоимость автопарка.
// console.log(myCompany.amountCars);
// cp02VW.turnOnAudioSystem();
// cp02VW.turnOffAudioSystem();
// m05HY.deliver("wardrobe");

console.log(myCompany.sortAutos('fuelСonsumption', 'asc')); // Провести сортировку автомобилей парка по расходу топлива.

// Найти автомобиль в компании, соответствующий заданному диапазону параметров.
let autos = myCompany.getAutos();
let autosSortedByYearBuilt = getAutoByRange(autos, 'yearBuilt', 2000, 2017);
console.log(getAutoByRange(autosSortedByYearBuilt, 'price', 1000, 11000));
// console.log(myCompany.getAuto('make', 'Volkswagen'));



