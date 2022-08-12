export class Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber) {
    this.make = make;
    this.yearBuilt = yearBuilt;
    this.price = price;
    this.mileage = mileage;
    this.fuelСonsumption = fuelСonsumption;
    this.seatsNumber = seatsNumber;
    this.airConditioner = false;
    this.audioSystem = false;
    this.childSeat = false;
    this.classAuto = 'Econom';
  }
}

export class Comfort extends Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, audioSystem, childSeat) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, audioSystem, childSeat);
    this.airConditioner = true;
    this.classAuto = 'Comfort';
  }

  turnOnConditioner() {
    console.log('Conditioner turned on');
  }

  turnOffConditioner() {
    console.log('Conditioner turned off');
  }

  putOnChildSeat() {
    this.childSeat = true;
    this.classAuto = 'Child';
  }
}

export class ComfortPlus extends Comfort {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner, childSeat) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner, childSeat);
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

export class Minivan extends Auto {
  constructor(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner, audioSystem, childSeat) {
    super(make, yearBuilt, price, mileage, fuelСonsumption, seatsNumber, airConditioner, audioSystem, childSeat);
    this.seatsNumber = seatsNumber;
    this.extraSpase = true;
    this.classAuto = 'Minivan';
  }

  deliver(load) {
    console.log(`${load} is delivered`);
  }

  putInExtraSeats(number) {
    if(number > 0 && number < 5) {
      this.seatsNumber += number;
    } else {
      console.log(`We can not put ${number} seats!`);
    }
  }

  putOutSeats(number) {
    if(number <= this.seatsNumber) {
      this.seatsNumber -= number;
    } else {
      console.log(`We can not put out ${number} seats!`);
    }
  }
}
