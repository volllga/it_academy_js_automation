// import {Calculator} from "../../calculator.js";
const { Calculator } = require("../../calculator.js");
const { intRandom, floatRandom, boolRandom, exponRandom } = require("../random");

describe("calculator spec", () => {
  let calculator;
  beforeEach(() => {
    calculator = new Calculator;
  });


  describe("a method add(numbers)", () => {
    [
      [0, 0],
      [" "],
      [intRandom()],
      [floatRandom()],
      [intRandom(), intRandom()],
      [floatRandom(), floatRandom()],
      [intRandom(), intRandom(), intRandom()],
      [intRandom(), floatRandom(), intRandom(), intRandom()],
      [exponRandom(), exponRandom()]
    ].forEach(([...args]) => {
      let sum = [...args].reduce((sum, a) => sum + a, 0);
      it(`* should be able to add ${args} and return right ${sum}`, () => {
        expect(calculator.add(...args)).toEqual(sum); // 0+0, разное кол-во параметров
      });
    });

    it("does not handle NaN", function () {
      expect(calculator.add(String(floatRandom()), intRandom())).toBeNaN();
    });

    it("a result should be a number", () => {
      expect(typeof calculator.add(intRandom(), floatRandom())).toEqual("number");
    });
  });


  describe("a method subtraction(numbers)", () => {
    [
      [0, 0],
      [" ", " "],
      [intRandom()],
      [floatRandom()],
      [0, floatRandom()],
      [intRandom(), intRandom()],
      [floatRandom(), floatRandom()],
      [exponRandom(), exponRandom()]
    ].forEach((a, b) => {
      let difference = a - b;
      it(`* should be able to subtract ${a} from ${b} and return right ${difference}`, () => {
        expect(calculator.subtraction(a, b)).toEqual(difference); // 0+0, разное кол-во параметров
      });
    });

    it("does not handle NaN", function () {
      expect(calculator.subtraction(String(floatRandom()), intRandom())).toBeNaN();
    });

    it("a result should be a number", () => {
      expect(typeof calculator.subtraction(intRandom(), floatRandom())).toEqual("number");
    });

    it("does not handle NaN", function () {
      expect(calculator.subtraction(boolRandom(), boolRandom())).toBeNaN();
    });
  });


  describe("a method divide(numbers)", () => {
    [
      [" ", " "],
      [intRandom()],
      [floatRandom()],
      [0, floatRandom()],
      [intRandom(), intRandom()],
      [floatRandom(), floatRandom()],
      [exponRandom(), exponRandom()]
    ].forEach((a, b) => {
      let quotient = a / b;
      it(`* should be able to divide ${a} by ${b} and return right ${quotient}`, () => {
        expect(calculator.divide(a, b)).toEqual(quotient); // 0+0, разное кол-во параметров
      });
    });

    it("division by zero not allowed", () => {
      expect(calculator.divide(intRandom(), 0)).toEqual("division by zero not allowed");
    });

    it("does not handle NaN", function () {
      expect(calculator.divide(String(floatRandom()), intRandom())).toBeNaN();
    });

    it("a result should be a number", () => {
      expect(typeof calculator.divide(intRandom(), floatRandom())).toEqual("number");
    });

    it("does not handle NaN", function () {
      expect(calculator.divide(boolRandom(), boolRandom())).toBeNaN();
    });
  });


  describe("a method multiply(numbers)", () => {
    [
      [0, 0],
      [" "],
      [intRandom()],
      [floatRandom()],
      [1, intRandom()],
      [intRandom(), intRandom()],
      [floatRandom(), floatRandom()],
      [intRandom(), intRandom(), intRandom()],
      [intRandom(), floatRandom(), intRandom(), intRandom()],
      [exponRandom(), exponRandom()]
    ].forEach(([...args]) => {
      let product = [...args].reduce((sum, a) => sum * a, 1);
      it(`* should be able to multiply ${args} and return right ${product}`, () => {
        expect(calculator.multiply(...args)).toEqual(product); // 0+0, разное кол-во параметров
      });
    });

    it("does not handle NaN", function () {
      expect(calculator.multiply(String(floatRandom()), intRandom())).toBeNaN();
    });

    it("does not handle NaN", function () {
      expect(calculator.multiply(boolRandom(), boolRandom())).toBeNaN();
    });

    it("a result should be a number", () => {
      expect(typeof calculator.multiply(intRandom(), floatRandom())).toEqual("number");
    });
  });


  describe("a method exponentiation(numbers)", () => {
    [
      [0],
      [" "],
      [intRandom()],
      [floatRandom()],
      [exponRandom()]
    ].forEach((a) => {
      let exponent = a * a;
      it(`* should be able to exponent ${a} and return right ${exponent}`, () => {
        expect(calculator.exponentiation(a)).toEqual(exponent); // 0+0, разное кол-во параметров
      });
    });

    it("does not handle NaN", function () {
      expect(calculator.exponentiation(String(floatRandom()))).toBeNaN();
    });

    it("a result should be a number", () => {
      expect(typeof calculator.exponentiation(intRandom())).toEqual("number");
    });

    it("does not handle NaN", function () {
      expect(calculator.exponentiation(boolRandom())).toBeNaN();
    });
  });


  describe("should be able use different Jasmine methods", () => {
    // !!! кейс с разными методами для тенировки
    // Для примитивных типов (например, числа, логические значения, строки и т.д.) Нет разницы между toBe и toEqual
    //Jasmine toBe matcher - не более чем оболочка для строгого сравнения на равенство
    // toEqual проверяет "глубокое равенство" (т.е. выполняет рекурсивный поиск по объектам,
    // чтобы определить, эквивалентны ли значения их ключей).
    it("toBe", () => {
      expect(calculator.add(1, 1)).toBe(2);
    });

    it("toBeGreaterThan", () => {
      expect(calculator.add(1, 1)).toBeGreaterThan( 3 );
    });
  });
});



