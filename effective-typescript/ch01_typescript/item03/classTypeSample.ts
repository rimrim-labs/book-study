class Person {
    constructor(public identity: string, public location: string) {}
}

class Dog {
    constructor(public breed: string, public lengthOfTails: number) {}
}

type AnimalClass = Person | Dog

/**
 * 타입을 클래스로 만들어 런타임에 타입을 비교한다.
 */
function checkAnimalClassType(animal: AnimalClass) {
    if (animal instanceof Person) {
        return animal.identity
    }

    return animal.breed
}
