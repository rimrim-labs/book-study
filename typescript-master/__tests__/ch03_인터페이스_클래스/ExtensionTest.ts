import {DerivedClass} from "../../src/ch03_인터페이스_클래스/ExtensionSample";

describe('상속 테스트', () => {
    test('클래스와 인터페이스를 상속한다.', () => {
        const test = new DerivedClass(1, 'hi', 'test class');
        expect(test.getDescription()).toEqual('test class');
    })
})