# 이펙티브 타입스크립트
## 7장. 코드를 작성하고 실행하기
### 아이템 53. 타입스크립트 기능보다는 ECMAScript 기능을 사용하기

**열거형 (enum)**

문자열 열거형은 타입스크립트에서와 자바스크립트 런타임에서 다르게 동작한다

```typescript
enum Flavor {
    VANILA = 'vanila',
    CHOCOLATE = 'chocholate',
    STRAWBERRY = 'strawberry',
}

declare function scoop(flavor: Flavor): void

// Argument of type '"vanila"' is not assignable to parameter of type 'Flavor'.
scoop('vanila')
```
- 타입스크립트에서는 구조적 타이핑 방식을 사용한다
- 그러나 열거형의 경우에는 타입 이름이 같아야 할당을 허용한다

```javascript
scoop('vanila')
```
- 그러나 자바스크립트 런타임 시점에 `flavor`는 문자열이다
- 따라서 문자열을 인자로 호출 가능하다

```typescript
declare function scoop(flavor: 'vanila' | 'chocolate' | 'strawberry'): void
```
- 열거형 대신 리터럴 타입의 유니온을 사용할 수 있다
- 리터럴 타입의 유니온은 열거형만큼 안전하며 자바스크립트와 호환된다
