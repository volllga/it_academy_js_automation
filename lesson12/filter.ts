type filtererType<T> = (value: T, index: number, array: Array<T>) => T;
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