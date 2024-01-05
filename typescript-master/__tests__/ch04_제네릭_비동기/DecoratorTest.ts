import {
    classDec,
    methodDec,
    parameterDec,
    propertyDec,
    staticPropertyDec
} from "../../src/ch04_제네릭_비동기/DecoratorSample";

describe('타입스크립트 데코레이터 테스트.', () => {
    test('클래스 데코레이터를 선언한다.', () => {
        @classDec
        class ClassWithDec {

        }

        const test = new ClassWithDec();
        expect((test as any).constructor_name).toEqual('ClassWithDec');
    });

    test('프로퍼티 데코레이터를 선언한다.', () => {
        class ClassPropertyWithDec {
            @propertyDec
            name: string = '';
        }

        const test = new ClassPropertyWithDec();
        expect((test as any).constructor_name).toEqual('ClassPropertyWithDec');
        expect((test as any).property_name).toEqual('name');
    });

    test('정적 프로퍼티 데코레이터를 선언한다.', () => {
        class ClassStaticPropertyWithDec {
            @staticPropertyDec
            static id: string = '';
        }

        expect((ClassStaticPropertyWithDec.prototype as any).constructor_name).toEqual('ClassStaticPropertyWithDec');
        expect((ClassStaticPropertyWithDec.prototype as any).property_key).toEqual('id');
    });

    test('메서드 데코레이터를 선언한다.', () => {
        // given
        class ClassMethodWithDec {
            @methodDec
            method() {
                return 1
            }
        }

        // when
        const test = new ClassMethodWithDec();

        // then
        expect((test as any).constructor_name).toEqual('ClassMethodWithDec');
        expect((test as any).method_name).toEqual('method');
        expect((test as any).decorated_method()).toEqual(1);
    });

    test('메서드 인자 데코레이터를 선언한다.', () => {
        // given
       class ClassMethodWithDec {
           method(@parameterDec param: string) {
               return param;
           }
       }

       // when
       const test = new ClassMethodWithDec();

       // then
        expect((test as any).constructor_name).toEqual('ClassMethodWithDec');
        expect((test as any).method_name).toEqual('method');
        expect((test as any).parameter_index).toEqual(0);
        expect((test as any).decorated_method('2')).toEqual('2');
    });
})