
// class TaxiCompany {
//   constructor() {
//     this.amountCars = 0;
//     this.totalPrice = 0;
//     this.autos = [];
//   }
//
//   addAuto(auto) {
//     this.autos.push(auto);
//     this.amountCars += 1;
//     this.totalPrice += auto.price;
//   }
//
//   getTotalPrice() {
//     return this.totalPrice;
//   }
//
//   getAuto(key, value) {
//     let result = [];
//     this.autos.forEach((auto) => {
//       // console.log(auto);
//       // console.log(auto[key])
//       if(auto[key] === value) {
//         result.push(auto)}
//     })
//
//     return result;
//   }
// }

export class Auto {           //Модуль обычно содержит класс или библиотеку с функциями.
  constructor(model, age, price, mileage, fuelСonsumption) {
    this.model = model;
    this.age = age;
    this.price = price;
    this.mileage = mileage;
    this.fuelСonsumption = fuelСonsumption;
    this.costMultiplier = 1;

    // function getcostMultiplier (multiplier) {
    //   return this.costMultiplier * multiplier;
    // }
  }
}

export class Comfort extends Auto {
  constructor(model, age, price, mileage, fuelСonsumption) {
    super(model, age, price, mileage, fuelСonsumption);
    this.airConditioner = true;
    this.costMultiplier = 1.2;
  }
}

export class ComfortPlus extends Comfort {
  constructor(model, age, price, mileage, fuelСonsumption) {
    super(model, age, price, mileage, fuelСonsumption);
    this.powerWindows = true;
    this.audioSystem = true;
    this.costMultiplier = 1.3;
  }
}

class Children extends Comfort {
  constructor(model, age, price, mileage, fuelСonsumption) {
    super(model, age, price, mileage, fuelСonsumption);
    this.childSeat = true;
    this.costMultiplier = 1.3;
  }
}

class Minivan extends Comfort {
  constructor(model, age, price, mileage, fuelСonsumption, seatsNumber) {
    super(model, age, price, mileage, fuelСonsumption);
    this.seatsNumber = seatsNumber;
    this.costMultiplier = 1.3;
  }
}




// let newCompany = new TaxiCompany();
// newCompany.addAuto(new ComfortPlus('BMW', 2017, 20000, 10000, 9));
// newCompany.addAuto(new ComfortPlus('Volkswagen Jetta VII', 2019, 21500, 18800, 1.4));
// console.log(newCompany)
// console.log(newCompany.getAuto('model', 'BMW'))
// console.log(newCompany.getTotalPrice())