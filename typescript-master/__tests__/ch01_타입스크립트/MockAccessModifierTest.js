const MyClass = require('../../src/ch01_타입스크립트/MockAccessModifier')

describe('자바스크립트로 프라이빗 변수를 흉내낸다.', () => {
    test('클로저로 변수를 선언한다.', () => {
        const test = new MyClass();
        test.countUp();
        expect(test.getCountUp()).toEqual(1);
    })

    test('클로저 변수의 이름을 알고 있으면 값을 바꿀 수 있다.', () => {
        const test = new MyClass();
        test._count = 17;
        expect(test.getCountUp()).toEqual(17);
    })
})