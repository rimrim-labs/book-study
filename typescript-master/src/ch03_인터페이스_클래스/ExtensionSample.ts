interface IFirstInterface {
    id: number;
}

interface ISecondInterface {
    name: string;
}

class BaseClass {
    constructor(protected description: string) {
    }

    getDescription() {
        return this.description;
    }
}

class DerivedClass extends BaseClass implements IFirstInterface, ISecondInterface {
    constructor(public id: number, public name: string, description: string) {
        super(description);
    }
}

export {
    DerivedClass
}