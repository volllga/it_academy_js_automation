let auto = {
  model: "BMW",
  year: 1888,
  engin: "sth",
};

let auto2 = auto;

console.log(Object.getPrototypeOf(auto), Object.getPrototypeOf(auto2));
console.log(Object.getPrototypeOf(auto) === Object.prototype);
console.log(Object.prototype, Object.getPrototypeOf(auto), Object.getPrototypeOf(auto2), );
console.log(Object.getPrototypeOf(auto) === Object.getPrototypeOf(auto2));
console.log(Object.getPrototypeOf(auto2) === Object.prototype);

function Foobar () {}
console.log(Object.getPrototypeOf(new Foobar()) === Foobar.prototype);
console.log("auto instanceof Object", auto instanceof Object); // obj instanceof Class
console.log("auto2.isPrototypeOf(auto)", auto.isPrototypeOf(auto2)); // ???

function Car(){
}
let car1 = new Car();
car1.name = "dom";
console.log("car1 instanceof Car", car1 instanceof Car);
console.log("car1.__proto__ === Car.prototype", car1.__proto__ === Car.prototype); // true
console.log("car1.constructor", car1.constructor); // [Function: Car]
let car2 = Object.create(car1);
console.log(car2.keys, car2.values, car2.entries, car2.name, car2.constructor, car2.__proto__.__proto__.__proto__, car1.isPrototypeOf(car2));

let building = new Object();
building.foundation = true;
building.amountOfwalls = 4;
console.log(building);
