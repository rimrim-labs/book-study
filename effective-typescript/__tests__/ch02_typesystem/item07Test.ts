interface Animal {
    name: string
}

interface Lifespan {
    birth: Date
    death?: Date
}

test('타입 intersection', () => {
    type AnimalSpan = Animal & Lifespan

    const animalSpan: AnimalSpan = {
        name: 'animal',
        birth: new Date()
    }

    // 'name', 'birth', 'death'
    type K = keyof AnimalSpan
})

test('타입 union', () => {
    type AB = Animal | Lifespan

    const a: AB = {
        name: 'animal',
    }
    const b: AB = {
        birth: new Date()
    }

    // 'never' - 공유 가능한 타입이 없다
    type K = keyof (AB)
})

test('keyof 유니온 타입', () => {
    type AB = Animal | { name: string, age: number }

    // 'name'
    type K = keyof (AB)
})