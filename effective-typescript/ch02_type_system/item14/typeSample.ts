/**
 * 타입 확장하기
 */
interface Simple {
    first: string
    last: string
}

interface IExtended extends Simple {
    middle: string
}

type TExtended = Simple & { middle: string }

/**
 * 부분 타입 정의하기
 */
type TinySimple = {
    [k in 'first']: Simple[k]
}

type TinySimplePick = Pick<Simple, 'first'>

/**
 * 옵션 타입 선언하기
 */
type Params = {
    id: number
    title: string
}

type OptionParams = { [k in keyof Params]?: Params[k] }
type PartialParams = Partial<Params>

/**
 * 제네릭 타입
 */
interface Info {
    name: string
    age: number
}

type Couple<T extends Info> = [T, T]

const couple: Couple<Info> = [
    { name: 'hi', age: 21 },
    { name: 'hello', age: 25 }
]