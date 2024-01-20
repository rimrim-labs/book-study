interface Coords {
    x: number
    y: number
    z: number
}

function calculate(c: Coords) {
    let length = 0

    for (const axios of Object.keys(c)) {
        // Element implicitly has an any type because expression of type string can't be used to index type Coords
        // const coord = c[axios]
        length += axios.length
    }
}

const colorCoords = {
    x: 1,
    y: 2,
    z: 3,
    hi: 'hello'
}

calculate(colorCoords)