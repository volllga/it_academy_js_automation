export class TaxiCompany {
  constructor() {
    this.amountCars = 0;
    this.totalPrice = 0;
    this.autos = [];
  }

  addAuto(auto) {
    this.autos.push(auto);
    this.amountCars += 1;
    this.totalPrice += auto.price;
  }

  getAuto(key, value) {
    let result = [];
    this.autos.forEach((auto) => {
      if(auto[key] === value) {
        result.push(auto)}
    })
    return result;
  }

  sortAutos(option, order) {
    let autos = this.autos;
      if (order === 'asc') {
        return autos.sort((a, b) => a[option] - b[option]);
      } else if (order === 'desc') {
        return autos.sort((a, b) => b[option] - a[option]);
      }
  }
}

