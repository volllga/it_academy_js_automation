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

  getTotalPrice() {
    return this.totalPrice;
  }

  getAuto(key, value) {
    let result = [];
    this.autos.forEach((auto) => {
      // console.log(auto);
      // console.log(auto[key])
      if(auto[key] === value) {
        result.push(auto)}
    })

    return result;
  }

  sortByFuelСonsumption(autos) {
    this.autos.sort((a, b) => {auto.fuelСonsumption - auto.fuelСonsumption})
  }
}

