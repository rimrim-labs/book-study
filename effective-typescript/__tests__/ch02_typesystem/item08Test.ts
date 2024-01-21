import { Circle } from "../../ch02_type_system/item08/typeSample";

test('클래스를 타입으로 사용한다.', () => {
    /**
     * 클래스의 필드와 메서드를 사용한다.
     */
    const circle: Circle = {
        x: 2,
        y: 3,
        getDistance(): number {
            return this.x + this.y
        }
    }

    expect(circle.getDistance()).toEqual(5)
})

test('클래스를 값으로 사용한다.', () => {
    const circle = {}
    Object.setPrototypeOf(circle, Circle.prototype)

    /**
     * 생성자를 사용한다.
     */
    expect(circle).toBeInstanceOf(Circle)
})

test('typeof는 타입에 사용될 때와 값에 사용될 때의 동작이 다르다.', () => {
    const circle = new Circle()

    // "Circle"
    type c = typeof circle
    // "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function"
    const c = typeof circle

    expect(c).toEqual("object")
    expect(typeof Circle).toEqual("function")
})