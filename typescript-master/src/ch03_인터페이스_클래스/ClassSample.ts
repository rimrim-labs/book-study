class ComplexType {
    id: number;
    name: string;
    constructor(idArg: number, nameArg: string);
    constructor(idArg: string, nameArg: string);
    constructor(idArg: any, nameArg: any) {
        this.id = idArg;
        this.name = nameArg;
    }
}

class ClassWithAutomaticProperties {
    constructor(public id: number, private name: string) {
    }
}

class ClassWithReadOnly {
    readonly name: string;
    constructor(_name: string) {
        this.name = _name;
    }
}

class ClassWithAccessors {
    private _id: number = 0;
    get id() {
        return this._id;
    }
    set id(value: number) {
        this._id = value;
    }
}

class StaticClass {
    static count = 0;
    static getTwo() {
        return 2;
    }
}

export {
    ComplexType,
    ClassWithAutomaticProperties,
    ClassWithReadOnly,
    ClassWithAccessors,
    StaticClass
}