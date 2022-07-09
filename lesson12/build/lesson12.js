"use strict";
// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
Object.defineProperty(exports, "__esModule", { value: true });
exports.add = exports.filter = exports.map = exports.ObjectManipulator = void 0;
const user1 = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW"
};
const user2 = {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2
};
const users = [user1, user2];
console.log(users);
const persons = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    }
];
console.log(persons);
//3. Напишите анотации типов к этому классу.
class ObjectManipulator {
    constructor(obj) {
        this.obj = obj;
    }
    set(key, value) {
        return new ObjectManipulator(Object.assign(Object.assign({}, this.obj), { key: value }));
    }
    getF(key) {
        return this.obj[key];
    }
    delete(key) {
        const newObj = Object.assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }
    getObject() {
        return this.obj;
    }
}
exports.ObjectManipulator = ObjectManipulator;
function map(mapper, input) {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}
exports.map = map;
function filter(filterer, input) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}
exports.filter = filter;
/**
 * 2 arguments passed: returns sum of a and b.
 *
 * 1 argument passed: returns a function which expects
 * b and returns sum of a and b.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Number} a
 * @param {Number} b
 * @return {Number | Function}
 */
function add(a, b) {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}
exports.add = add;
