// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.

interface IUser1 {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const user1: IUser1 = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW"
};

const user2: IUser1 = {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2
};

const users: IUser1[] = [user1, user2];
console.log(users);


// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person,
// который будет соответствовать массиву

interface IUser2 {  // здесь можно было использовать IUser1, но, предположим, что задачи независимые
    name: string,
    age: number,
    occupation?: string,
}

interface IAdmin extends IUser2{
    readonly role: string
}

interface Person {
    [index: number]: IAdmin | IUser2
}

const persons: Person = [
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

export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends keyof T, V>(key: K, value: V): Object {
        return new ObjectManipulator({...this.obj, key: value});
    }

    public getF<K extends keyof T>(key: K): T[K] {   // хотелось бы узнать о typeof на занятии
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K ): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}


// 4. Обеспечьте правильную типизацию для указанных функций.

    /**
     * 2 arguments passed: returns a new array
     * which is a result of input being mapped using
     * the specified mapper.
     *
     * 1 argument passed: returns a function which accepts
     * an input and returns a new array which is a result
     * of input being mapped using original mapper.
     *
     * 0 arguments passed: returns itself.
     *
     * @param {Function} mapper
     * @param {Array} input
     * @return {Array | Function}
     */

export type mapperType<T> = (value: T, index: number, array: Array<T>) => T;

export function map<T>(mapper: mapperType<T>, input: T[]): Array<T> | Function {
    if (arguments.length === 0) {
        return map;
    }
    if (arguments.length === 1) {
        return function subFunction (subInput: T[]): Array<T> | Function {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.map(mapper);
        };
    }
    return input.map(mapper);
}


/**
 * 2 arguments passed: returns a new array
 * which is a result of input being filtered using
 * the specified filter function.
 *
 * 1 argument passed: returns a function which accepts
 * an input and returns a new array which is a result
 * of input being filtered using original filter
 * function.
 *
 * 0 arguments passed: returns itself.
 *
 * @param {Function} filterer
 * @param {Array} input
 * @return {Array | Function}
 */

export type filtererType<T> = (value: T, index: number, array: Array<T>) => T;

export function filter<T>(filterer: filtererType<T>, input: T[]) {
    if (arguments.length === 0) {
        return filter;
    }
    if (arguments.length === 1) {
        return function subFunction(subInput: T[]) {
            if (arguments.length === 0) {
                return subFunction;
            }
            return subInput.filter(filterer);
        };
    }
    return input.filter(filterer);
}


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

export function add(a: number, b: number): number | Function {
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction<T>(subB: number): number | Function{
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}

