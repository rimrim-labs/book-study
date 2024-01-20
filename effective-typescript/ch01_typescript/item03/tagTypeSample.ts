interface Person {
    kind: 'person'
    location: string
    identity: string
}

interface Dog {
    kind: 'Dog'
    breed: string
    lengthOfTail: number;
}

type TaggedAnimal = Person | Dog

/**
 * 태그 값을 저장해 런타임에 타입을 비교한다.
 */
function checkAnimalTagType(animal: TaggedAnimal) {
    if (animal.kind === 'person') {
        return animal.identity
    }

    return animal.breed
}

