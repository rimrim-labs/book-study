# 이펙티브 타입스크립트
## 7장. 코드를 작성하고 실행하기
### 아이템 53. 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

**열거형 (Enum)**
- 열거형은 자바스크립트가 아닌 타입스크립트에서만 지원하는 기능이다
- 열거형을 사용할경우 `Tree-Shaking`이 수행되지 않는다
- 열거형은 자바스크립트와 타입스크립트에서의 동작이 다르다

```typescript
enum Flavor {
    VANILLA = 'vanilla',
    CHOCO = 'choco',
    STRAWBERRY = 'strawberry'
}

function test(flavor: Flavor) {
}

// Argument of type '"vanilla"' is not assignable to parameter of type 'Flavor'.
test('vanilla')
```
- 타입스크립트에서는 열거형 타입의 이름 (ex. `Flavor`)이 같아야 할당 가능하다
- 자바스크립트에서는 문자열이 같으면 할당 가능하다

**Tree-Shaking**
- `Tree-Shaking`이란 사용되지 않는 코드를 삭제하는 기능으로, 자바스크립트에서 일반적으로 사용되는 용어이다
- 미사용 코드를 제거해 번들 크기를 줄여 페이지가 로딩되는 시간을 단축할 수 있다

```typescript
// 타입스크립트 enum
enum Tree {
    Hi,
    Hello,
    Good
}

// 트랜스컴파일된 자바스크립트
var Tree;
(function (Tree) {
    Tree[Tree["Hi"] = 0] = "Hi";
    Tree[Tree["Hello"] = 1] = "Hello";
    Tree[Tree["Good"] = 2] = "Good";
})(Tree || (Tree = {}));
```
- 자바스크립트 번들러에서는 `즉시 실행 함수 (IIFE)`가 사용되지 않는 코드라고 판단할 수 없어 `Tree-Shaking`을 수행하지 않을 수 있다. (ex. `Rollup`)

**열거형 대체재**
- 열겨형 대신 리터럴 타입의 유니온 사용을 권장한다
- 타입스크립트 열겨형과 다르게, 유니온은 자바스크립트와 호환 가능하다

```typescript
const FLAVOR = {
    STRAWBERRY: 'strawberry',
    CHOCO: 'choco',
    VANILLA: 'vanilla'
}

type FLAVOR = typeof FLAVOR[keyof typeof FLAVOR] // 'STRAWBERRY' |'CHOCO' | 'VANILLA'
```