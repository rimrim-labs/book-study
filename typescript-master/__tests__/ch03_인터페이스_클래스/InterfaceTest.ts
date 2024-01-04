import {IOptionalProp} from "../../src/ch03_인터페이스_클래스/InterfaceSample";

describe('인터페이스 타입을 선언한다.', () => {
    test('인터페이스를 적용해 컴파일 타임에 필드를 검사한다.', () => {
        const idOnly: IOptionalProp = { id: 1 };
        let idAndName: IOptionalProp = { id: 2, name: "idAndName" };
        idAndName = idOnly;

        expect(idAndName.id).toEqual(1);
        expect(idAndName.name).toEqual(undefined);
    })
})