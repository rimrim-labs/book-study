function addOptional<T extends object, U extends object>(a: T, b: U | null): T & Partial<U> {
    return { ...a, ...b }
}

const targetObj = {
    name: 'hi',
    age: 12
}

const flag: boolean = true

const res = addOptional(targetObj, flag ? { start: 12, end: 21} : null );