/**
 * 타입스크립트 데코레이터를 선언한다.
 */

// 클래스 데코레이터 - 클래스 생성자를 인자로 받는다
function classDec(constructor: Function) {
    constructor.prototype.constructor_name = constructor.name;
}

// 프로퍼티 데코레이터 - 클래스 프로토타입과 프로퍼티 이름을 인자로 받는다
function propertyDec(target: any, propertyKey: string) {
    target.constructor_name = target.constructor.name;
    target.property_name = propertyKey;
}

// 정적 프로퍼티 데코레이터 - 클래스 생성자와 프로퍼티 이름을 인자로 받는다
function staticPropertyDec(target: any, propertyKey: string) {
    target.prototype.constructor_name = target.name;
    target.prototype.property_key = propertyKey;
}

// 메서드 데코레이터 - 클래스 프로토타입, 메서드 이름, 메서드 설명자를 인자로 받는다
function methodDec(target: any, methodName: string, description?: PropertyDescriptor) {
    target.constructor_name = target.constructor.name;
    target.method_name = methodName;
    target.method_description = description;
    target.decorated_method = target[methodName];
}

// 인자 데코레이터 - 클래스 프로토타입과 메서드 이름, 인덱스를 인자로 받는다
function parameterDec(target: any, methodName: string, parameterIndex: number) {
    target.constructor_name = target.constructor.name;
    target.method_name = methodName;
    target.parameter_index = parameterIndex;
    target.decorated_method = target[methodName];
}

export {
    classDec,
    propertyDec,
    staticPropertyDec,
    methodDec,
    parameterDec
}

