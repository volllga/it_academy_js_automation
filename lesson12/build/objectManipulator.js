"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManipulator = void 0;
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
//Для получения ключей нужно указать оператор keyof,
// после которого указывается тип, чьи ключи будут объединены в тип объединение keyof Type.
//
//type Staff {
//  name: string;
//  salary: number;
//  }
// type staffKeys = keyof Staff; // "name" | "salary"
//
// Оператор keyof может применяться к любому типу данных.
//type AliasType = { f1: number, f2: string };
//
// interface IInterfaceType {
//   f1: number;
//   f2: string;
// }
//
// class ClassType {
//   f1: number;
//   f2: string;
// }
//
// let v1: keyof AliasType; // v1: "f1" | "f2"
// let v2: keyof IInterfaceType; // v2: "f1" | "f2"
// let v3: keyof ClassType; // v3: "f1" | "f2"
// let v4: keyof number; // v4: "toString" | "toFixed" | "toExponential" | "toPrecision" | "valueOf" | "toLocaleString"
//https://typescript-definitive-guide.ru/book/chapters/Operator_keyof,Lookup_Types,Mapped_Types,Mapped_Types_-_prefiksy_+_i_-/
