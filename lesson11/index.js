import {TaxiCompany} from './taxiCompany.js'; //Модули не работают локально. Только через HTTP(s)
import {Auto, Comfort, ComfortPlus} from './auto.js'; //Модули не работают локально. Только через HTTP(s)

let newCompany = new TaxiCompany();
newCompany.addAuto(new ComfortPlus('BMW', 2017, 20000, 10000, 9));
newCompany.addAuto(new ComfortPlus('Volkswagen Jetta VII', 2019, 21500, 18800, 1.4));
console.log(newCompany)
console.log(newCompany.getAuto('model', 'BMW'))
console.log(newCompany.getTotalPrice())

//удалить ненужные файлы из индекса
//закоммитить README
// сделать сортировку