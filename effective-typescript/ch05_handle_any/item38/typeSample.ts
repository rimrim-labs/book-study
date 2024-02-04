/**
 * 함수에 any 사용하기
 */
type A = { a: string }
type B = { b: string }

function fa(): A {
    return {
        a: 'hello'
    }
}

function fb(b: B) {
    console.log(b)
}

function processA(): A {
    const x = fa()
    fb(x as any)
    return x
}

function processAsAny() {
    const x: any = fa()
    fb(x)
    return x
}

const ra = processAsAny()
ra.notExistMethod()

/**
 * 객체에 any 사용하기
 */
type Config = {
    a: number,
    b: number
    c: {
        key: string
    }
}

const config: Config = {
    a: 1,
    b: 2,
    c: {
        key: 1 as any
    }
}

const configAsAny: Config = {
    a: 1,
    b: 2,
    c: {
        key: 1
    }
} as any