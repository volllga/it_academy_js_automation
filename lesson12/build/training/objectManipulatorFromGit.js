"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectManipulatorFromGit = void 0;
class ObjectManipulatorFromGit {
    constructor(obj) {
        this.obj = obj;
    }
    set(key, value) {
        return new ObjectManipulatorFromGit(Object.assign(Object.assign({}, this.obj), { [key]: value }));
    }
    get(key) {
        return this.obj[key];
    }
    delete(key) {
        const newObj = Object.assign({}, this.obj);
        delete newObj[key];
        return new ObjectManipulatorFromGit(newObj);
    }
    getObject() {
        return this.obj;
    }
}
exports.ObjectManipulatorFromGit = ObjectManipulatorFromGit;
