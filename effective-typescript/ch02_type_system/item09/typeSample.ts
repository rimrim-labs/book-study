interface Flower {
    name: string
}

const sunflower: Flower = {
    name: 'sunflower',
}

const rose = {} as Flower

const lily: Flower = {
    name: 'lily',
    // color: 'white'
}

const freesia = {
    name: 'freesia',
    color: 'yellow'
} as Flower

const daisy = {
    color: 'yellow'
} as unknown as Flower