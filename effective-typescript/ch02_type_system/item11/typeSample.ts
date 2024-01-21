interface Room {
    numDoors: number
    ceilingHeightFt: number
}

const r: Room = {
    numDoors: 1,
    ceilingHeightFt: 10,
}

const obj = {
    numDoors: 1,
    ceilingHeightFt: 11,
    elephant: 'present'
}

const objRoom: Room = obj

/**
 * 인덱스 시그니처를 선언해 잉여 속성 체크를 비활성화한다
 */
interface Options {
    darkMode?: boolean
    [otherOptions: string]: unknown
}

const opt: Options = {
    darkmode: true
}

/**
 * 모든 속성이 선택인 약한 타입에서는 공통 속성 존재 여부를 체크한다
 */
interface LineChartOptions {
    logscale?: boolean
    invertedYAxis?: boolean
    areaChart?: boolean
}
const opts = { logScale: true }

//  Type { logScale: boolean; } has no properties in common with type LineChartOptions
// const o: LineChartOptions =  opts