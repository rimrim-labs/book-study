type Indexed = {
    [property: string]: string
}

const index: Indexed = {
    id: '123',
    name: 'index'
}

type Vec3D = Record<'x' | 'y' | 'z', number>
const vec: Vec3D = {
    x: 1,
    y: 2,
    z: 3
}

type ColorfulVec = { [k in 'x' | 'y' | 'z' | 'color']: k extends 'color' ? string : number }