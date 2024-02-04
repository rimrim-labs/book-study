# 이펙티브 타입스크립트
## 5장. any 다루기
### 아이템 38. any 타입은 가능한 한 좁은 범위에서만 사용하기
**함수 any**
- `any`는 가능한 좁은 범위에어 사용해야 한다

```typescript
function process() {
    const x = fa()
    // const x: any = fa()
    fb(x as any)
}
```
- `x`를 `any` 타입으로 선언하는 것 보다 `x as any`로 단언하는 게 더 좁은 범위에어 사용된다
- `x as any`는 `fb()` 호출부 외의 다른 코드에 영향을 미치지 않는다

```typescript
function processAsAny() {
    const x: any = fa()
    fb(x)
    return x
}

const ra = processAsAny()
ra.notExistMethod()
```
- 지역 변수를 `any` 타입으로 선언해 반환할 경우 프로젝트 전반에 영향을 준다
- `ra`가 `any` 타입이기 때문에 `ra.notExistMethod()` 함수 호출이 체크되지 않는다
- `any`가 함수 밖에 영향을 미치는 것을 방지하기 위해 함수 반환 값을 명시적으로 선언하는 것이 좋다

**객체 any**
```typescript
// 최소한의 범위만 any 사용
const config: Config = {
    a: 1,
    b: 2,
    c: {
        // 문제가 되는 속성 값
        key: 1 as any
    }
}

// 객체 전체를 any로 단언
const configAsAny: Config = {
    a: 1,
    b: 2,
    c: {
        key: 1 
    }
} as any
```
- 객체 전체를 `any` 타입으로 단언하면 `a`, `b` 속성에 대해서도 타입 체크가 되지 않는다
- 최소한의 범위에만 `any`를 사용하는 것이 좋다