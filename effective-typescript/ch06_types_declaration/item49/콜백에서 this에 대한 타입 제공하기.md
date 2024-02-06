# 이펙티브 타입스크립트
## 6장. 타입 선언과 @types
### 아이템 49. 콜백에서 this에 대한 타입 제공하기
**this 스코프**
- `let`, `const`로 선언된 변수는 렉시컬 스코프를 갖는다
- 반면에 `this`는 메서드가 호출되는 방식에 따라 할당된다 (다이나믹 스코프)
  - 다이나믹 스코프: 정의된 방식이 아니라 호출된 방식에 따라 달라짐

**this 값 할당 방식**
1. 함수 호출 (ex. `foo()`) - 글로벌 객체나 `undefined` 할당
2. 화살표 함수가 아닌 메서드 호출 - (ex. `obj.foo()`) - 메서드를 호출한 `obj` 할당
3. `apply()`, `call()` - 인자로 넘긴 값 할당
4. `new` (ex. `new foo()`) - 새로운 객체가 생성되고, 해당 객체 할당
5. 화살표 함수 - 함수가 정의된 시점의 `this` 값 할당 (렉시컬 스코프)

```typescript
class C {
    squares = ['hi', 'hello']

    logSquares() {
        return this.squares
    }
}

const c = new C()
const m = c.logSquares

console.log(c.logSquares())
// Cannot read properties of undefined (reading 'squares')
console.log(m()) 
```
- 클래스 메서드를 다른 변수에 할당한 후 실행하면 `this` 값이 `undefined`라는 예외가 출력된다
- `c.logSquares()`는 `C.prototype.logSquares`를 호출하는 것 뿐만 아니라, `this`를 `c`에 할당하는 작업까지 수행한다

**this 바인딩**
```typescript
class ResetButton {
    render() {
        return makeButton({text: 'Reset', onClick: this.onClick})
    }

    onClick() {
        alert(`Reset ${this}`) // 'Reset undefined'
    }
}

function makeButton({ text, onClick}: {text: string, onClick: () => void}) {
    // this 유실
    onClick()
}
```
- `makeButton`에서 `onClick()`을 호출하면 새로운 의도하지 않은 `this` 정보를 할당받게 된다

```typescript
class ResetButton {
    constructor() {
        this.onClick = this.onClick.bind(this)
    }

    render() {
        return makeButton({text: 'Reset', onClick: this.onClick})
    }

    onClick() {
        alert(`Reset ${this}`)
    }
}
```
- 일반적인 해결책은 생성자에서 메서드에 `this`를 바인딩시키는 것이다
- 인스턴스 `this`에 바인딩된 `onClick()`이 프로토타입에 정의된 `onClick()`보다 먼저 탐색되고 사용된다

```typescript
class ResetButton {
    constructor() {
        this.onClick = this.onClick.bind(this)
    }

    render() {
        return makeButton({text: 'Reset', onClick: this.onClick})
    }

    onClick = () => {
        alert(`Reset ${this}`)
    }
}
```
- 혹은 화살표 함수를 사용해 제대로된 `this`를 갖는 함수를 정의할 수 있다
- 화살표 함수를 사용해 인스턴스마다 서로 다른 `onClick()` 메서드를 할당할 수 있다

**타입스크립트 this**
```typescript
function addKeyListener(el: HTMLElement, fn: (this: HTMLElement, e: KeyboardEvent) => void) {
    el.addEventListener('keydown', e => {
        fn.call(el, e)
    })
}
```
- 콜백 함수의 매개변수에 `this`를 추가하면 `this` 바인딩이 체크되기 때문에 실수를 방지할 수 있다

```typescript
function addKeyListener(el: HTMLElement, fn: (this: HTMLElement, e: KeyboardEvent) => void) {
    el.addEventListener('keydown', e => {
        // The 'this' context of type 'void' is not assignable to method's 'this' of type 'HTMLElement'.
        fn(e)
    })
}
```
- `this` 타입이 일치하지 않으면 컴파일 에러가 발생한다

