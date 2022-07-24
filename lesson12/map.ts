type mapperType<T> = (value: T, index: number, array: Array<T>) => T;

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

