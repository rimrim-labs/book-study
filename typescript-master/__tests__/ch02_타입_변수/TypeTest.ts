import {DoorState, DoorStateConst} from "../../src/ch02_타입_변수/DoorState";
import {add} from "../../src/ch02_타입_변수/AddOverload";
import {StringOrNumber, UserTypeGuard} from "../../src/ch02_타입_변수/TypeGuard";

describe('타입스크립트 덕 타이핑', () => {
    test('속성이 같으면 같은 타입으로 취급된다.', () => {
        let testA = {id: 1};
        const testB = {id: 2, name: 'hi'};
        testA = testB;
        expect(testA.id).toEqual(2);
        expect((testA as typeof testB).name).toEqual('hi');
    });
})

describe('Enum을 생성한다.', () => {
    test('특정 숫자를 문자와 연결한다.', () => {
        expect(DoorState.Open).toEqual(0);
        expect(DoorState.Closed).toEqual(1);
        expect(DoorState.Ajar).toEqual(2);

        expect(DoorState[0]).toEqual("Open");
    })

    test('상수 열겨형을 생성한다.', () => {
        expect(DoorStateConst.Open).toEqual(0);
        // expect(DoorStateConst[0]).toEqual("Open);
    })
});

describe('메서드를 오버로딩 한다.', () => {
    test('같은 함수를 인자만 다르게 호출한다.', () => {
        expect(add(1, 1)).toEqual(2);
        expect(add("1", "1")).toEqual("11");
    })
})

describe('타입 가드 테스트', () => {
    test('타입을 보장하는 타입 가드를 사용한다.', () => {
        const unknown: StringOrNumber = 'str';
        if (UserTypeGuard(unknown)) expect(typeof unknown).toEqual("string");
        else expect(typeof unknown).toEqual("number");
    })
})