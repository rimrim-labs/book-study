import {ClassWithAccessors, StaticClass} from "../../src/ch03_인터페이스_클래스/ClassSample";
describe('클래스 필드를 선언한다.', () => {
    test('클래스 필드 접근자를 선언한다.', () => {
        const test = new ClassWithAccessors();
        test.id = 12;
        expect(test.id).toEqual(12);
    })

    test('클래스 정적 필드를 선언한다.', () => {
        expect(StaticClass.count).toEqual(0);
        expect(StaticClass.getTwo()).toEqual(2);
    });
})