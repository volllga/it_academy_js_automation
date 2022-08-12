export class ObjectManipulator {

  constructor(obj) {
    this.obj = obj;
  }

  set(key, value) {
    return new ObjectManipulator({...this.obj, [key]: value});
  }

  get(key) {
  return this.obj[key];
}

  delete(key) {
  const newObj = {...this.obj};
  delete newObj[key];
  return new ObjectManipulator(newObj);
}

  getObject() {
  return this.obj;
}
}

let dog = {name: "Sharik", ade: 5};
let myManip = new ObjectManipulator(dog);
console.log(myManip.set("host", "Ira Petrova"));
console.log(myManip.get("name"));
console.log(myManip.delete("host"));
console.log(myManip.getObject());


