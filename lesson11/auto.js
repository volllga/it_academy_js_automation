export class Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber) {
    this.make = make;
    this.yearBuilt = yearBuilt;
    this.price = price;
    this.mileage = mileage;
    this.fuelСonsumption = fuelСonsumption;
    this.seatsNumber = seatsNumber;
    this.classAuto = 'Econom';
  }
}

export class Comfort extends Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber);
    this.airConditioner = true;
    this.classAuto = 'Comfort';
  }
}

export class ComfortPlus extends Comfort {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner);
    this.audioSystem = true;
    this.classAuto = 'ComfortPlus';
  }

  turnOnAudioSystem() {
    console.log('Music starts');
  }

  turnOffAudioSystem() {
    console.log('Music ends');
  }
}

export class Children extends Comfort {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner);
    this.childSeat = true;
    this.classAuto = 'Children';
  }
}

export class Minivan extends Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber);
    this.seatsNumber = seatsNumber;
    this.extraSpase = true;
    this.classAuto = 'Minivan';
  }

  deliver(load) {
    console.log(`${load} is delivered`);
  }
}
