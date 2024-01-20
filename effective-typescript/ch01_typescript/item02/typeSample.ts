/**
 * noImplicitAny : 묵시적인 any 타입을 금지한다.
 */
function add(a: number, b: number) {
    return a + b;
}

/**
 * noImplicitAny: 명시적인 any 타입은 허용한다
 */
function getAnyInput(input: any) {
    return input;
}

/**
 * strictNullChecks : 'null' 을 다른 타입에 허용하지 않는다
 */
const x: number | null = null;

/**
 * strictNullChecks : 'undefined' 를 다른 타입에 허용하지 않는다
 */
const y : number | undefined = undefined