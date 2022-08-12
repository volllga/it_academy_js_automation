type ObjWithProp<T,K extends string, P> = T & {[k in K]: P};

export class ObjectManipulatorFromGit<T>{

    constructor(protected obj: T) {}

    public set<K extends string, P>(key: K, value: P): ObjectManipulatorFromGit<ObjWithProp<T, K, P>> {
        return new ObjectManipulatorFromGit({...this.obj, [key]: value} as ObjWithProp<T, K, P>);
    }

    public get<K extends keyof T> (key: K): T[K]{
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K): ObjectManipulatorFromGit<Omit<T,K>>{
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulatorFromGit(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}