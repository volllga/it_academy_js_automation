// 1 Классы
// class Vehicle {
//     constructor(numberOfWheel, color, numberOfPassangers) {
//         this.numberOfWheel = numberOfWheel;
//         this.color = color;
//         this.numberOfPassangers = numberOfPassangers;
//         this.carClass = 'busines';
//     }

//     move() {
//         console.log('This car is moving');
//     }
// }

// let car = new Vehicle(4, 'white', 5);
// console.log(car);
// car.move();

// class WheelsVehicle extends Vehicle {
//     constructor(numberOfWheel, color, numberOfPassangers, engine) {
//         super(numberOfWheel, color, numberOfPassangers);
//         this.engine = engine;
//     }
// }
// let newCar = new WheelsVehicle(4, 'grey', 8, 'v8');
// console.log(newCar);
// newCar.move();

// 2  Функция конструктор
// function Vehicle(numberOfWheel, color, numberOfPassangers) {
//         this.numberOfWheel = numberOfWheel;
//         this.color = color;
//         this.numberOfPassangers = numberOfPassangers;
// }
// let car = new Vehicle(4, 'white', 5);
// Vehicle.prototype.move = function() {
//     console.log(`This car is moving`);
// }

// Vehicle.prototype.moveTo = function() {
//     console.log('New Car move to London');
// }

// car.move();
// // console.log(global);

// function WheelVehicle(engine, color) {
//     this.engine = engine;
//     this.color = color;
// }
 
// function inherit(child, parent) {
//     child.prototype = new parent(4, 'blue', 10);
// }

// inherit(WheelVehicle, Vehicle);

// let newCar = new WheelVehicle('V6', 'SUPERCOLOR');
// console.log(newCar);
// newCar.moveTo();
// console.log(newCar.numberOfWheel);
// console.log(newCar.color);
// console.log(newCar.numberOfPassangers);

// 3 Фабричный метод
// function vehicle(numberOfWheel, color, numberOfPassangers) {
//     return {
//         numberOfWheel: numberOfWheel,
//         color: color,
//         numberOfPassangers: numberOfPassangers,
//     }
// }
//  let car = vehicle(4, null, 5);
//  let car1 = vehicle(6, 'black', 10);
// console.log(car);
// console.log(car1);

// function inherit(child, parent) {
//     child.prototype = new parent(4, 'blue', 10);
// }

// inherit(WheelVehicle, Vehicle);
// 4. Связывание объектов

// const Vehicle = {
//      init(numberOfWheel, color, numberOfPassangers) {
//         this.numberOfWheel = numberOfWheel;
//         this.color = color;
//         this.numberOfPassangers = numberOfPassangers;
//     },

//     engine: 'V12',

//     moveTo: function() {
//         console.log('I am mooving to victory');
//     }
// }

// const car = Object.create(Vehicle);
// console.log(car);
// car.init(4, null, 5);
// console.log(car);
// car.moveTo();
// console.log(car.engine);

// const car1 = Object.create(Vehicle);
// car1.init(100, 'silver', 20);
// console.log(car1);
// car1.moveTo();