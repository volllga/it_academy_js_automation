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
        expect(calculator.add(...args)).toEqual(sum);
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
        expect(calculator.subtraction(a, b)).toEqual(difference);
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
        expect(calculator.divide(a, b)).toEqual(quotient);
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
        expect(calculator.multiply(...args)).toEqual(product);
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
        expect(calculator.exponentiation(a)).toEqual(exponent);
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

    it("toMatch", () => {
      expect(calculator.add("1", 1)).toMatch("11"); // toMatch(<string> || <regexp>)
    });

    it("toBeCloseTo", function() {
      //the "precision" - SECOND parameter specifies the number of decimal places
      // that the matcher will check precision at, with rounding.
      //
      // expect(0.1+0.2).toBe(0.3); // fails becouse it's 0.30000000000000004
      // expect(0.1+0.2).toBeCloseTo(0.3); // pass
      let pi = 3.1415926, e = 2.78;

      expect(pi).not.toBeCloseTo(e, 2);
      expect(pi).toBeCloseTo(e, 0);
    });
  });
});



