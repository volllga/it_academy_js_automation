export class TaxiCompany {
  constructor() {
    this.amountCars = 0;
    this.totalPrice = 0;
    this.autos = [];
  }

  addAuto(auto) {               // добавляем авто
    this.autos.push(auto);
    this.amountCars += 1;
    this.totalPrice += auto.price;
  }

  getAutos() {               // возвращаем массив авто
    return this.autos;
  }

  getAuto(key, value) {    // возвращаем авто по значению поля
    let result = [];
    this.autos.forEach((auto) => {
      if(auto[key] === value) {
        result.push(auto)}
    })
    return result;
  }

  sortAutos(option, order) {   // сортируем массив авто по полю
    let autos = this.autos;
      if (order === 'asc') {
        return autos.sort((a, b) => a[option] - b[option]);
      } else if (order === 'desc') {
        return autos.sort((a, b) => b[option] - a[option]);
      }
  }

  getAutoByRange(autos, option, lowerBoundary, upperBoundary) { // возвращаем массив авто по диапазону параметра
    return autos.filter(item => (lowerBoundary <= item[option]
      && item[option] <= upperBoundary));
  }
}

