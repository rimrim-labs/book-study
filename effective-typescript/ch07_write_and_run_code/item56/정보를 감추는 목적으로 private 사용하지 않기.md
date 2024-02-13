# 이펙티브 타입스크립트
## 7장. 코드를 작성하고 실행하기
### 아이템 56. 정보를 감추는 목적으로 private 사용하지 않기

**타입스크립트 private**
```typescript
class Secrets {
    private identity = '2222-2222'
}

const s = new Secrets()
//Property 'identity' is private and only accessible within class 'Secrets'.
s.identity
```
- 타입스크립트는 `public`, `protected`, `private` 접근 제어자를 지원한다
- `private` 접근 제어자를 갖는 필드는 클래스 외부에서 접근할 수 없다

```javascript
"use strict";
class Secrets {
    constructor() {
        this.identity = '2222-2222';
    }
}
```
- 그러나 `private`은 타입스크립트 키워드이므로 컴파일 이후에는 제거된다
- `private` 필드는 컴파일되면 일반 속성이 된다

```typescript
const s = new Secrets();
(s as any).identity
```
- 심지어 타입 단언문을 사용하면 접근 가능해진다

**클로저**
```typescript
class Secrets {
    isSameIdentity: (compare: string) => boolean;

    constructor(identity: string) {
            this.isSameIdentity = (compare: string) => compare === identity
    }
}

const s = new Secrets('2222-2222');
s.isSameIdentity('2222-2222') // true
```
- 클로저를 선언해 내부 데이터를 감출 수 있다
- 그러나 인스턴스가 생성될 때마다 동일한 메서드 복사본이 생성되며 서로 다른 인스턴스 간 접근이 불가능하다

```typescript
class Secrets {
    #identity: string

    constructor(identity: string) {
            this.#identity = identity
    }

    isSame(other: Secrets) {
        return this.#identity === other.#identity
    }
}
```
- `#` 속성을 사용하면 런타임과 컴파일 타임에 모두 값을 비공개로 설정할 수 있다
- `#` 속성은 동일 클래스 인스턴스 간에 접근이 가능하다