type TState = {
    name: string
    capital: string
}

interface IState {
    name: string
    capital: string
}

/**
 * 자바스크립트에서 함수는 호출 가능한 객체이므로 아래와 같이 타입을 선언할 수 있다.
 */
type TFnWithProperties = {
    (x: number): string
}

interface IFnWithProperties {
    (x: number): string
}

const toStrT: TFnWithProperties = x => '' + x
const toStrI: IFnWithProperties = x => '' + x

/**
 * 인터페이스와 타입은 상호 확장 가능하다
 */
interface IState extends TState {
    population: number
}
type TStateWithPop = IState & { population: number }
