export function add(a?: number, b?: number): number | object |undefined{
    if (arguments.length === 0) {
        return add;
    }
    if (arguments.length === 1) {
        return function subFunction(subB?: number): number | object | undefined{
            if (arguments.length === 0) {
                return subFunction;
            }
            return a + subB;
        };
    }
    return a + b;
}
