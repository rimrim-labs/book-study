/**
 * Beverage 타입
 */
interface Beverage {
    name: string
    size: string
}

/**
 * Beverage 값
 */
const Beverage = (name: string, size: string) => ({name, size})

/**
 * Circle 타입
 */
class Circle {
    x: number = 0
    y: number = 0

    getDistance() {
        return this.x + this.y;
    }
}

/**
 * Circle 값
 */
const obj = {}
if (obj instanceof Circle) {
    obj
    obj.x
}

export {
    Circle
}


