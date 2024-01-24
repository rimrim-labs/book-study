# 이펙티브 타입스크립트
## 2장. 타입스크립트의 타입시스템
### 아이템 17. 변경 관련된 오류 방지를 위해 readonly 사용하기

**readonly**
```typescript
const nums: readonly number[] = [1,2,3,4]
// Property 'pop' does not exist on type 'readonly number[]'.
nums.pop()
```
- `readonly` 타입을 선언해 수정을 제한한다
  - 배열 요소 읽기 가능, 쓰기 불가
  - length 변경 불가
  - 배열 요소를 변경하는 메서드 호출 불가 (ex. pop)

```typescript
let nums: readonly number[] = [1,2,3,4]
let mutableNums = [2,3,4,5]

// The type 'readonly number[]' is 'readonly' and cannot be assigned to the mutable type 'number[]'
mutableNums = nums
```
- `readonly number[]` 타입은 `number[]` 타입에 할당 불가능하다

```typescript
interface Nested {
    inner: {
        prop: number
    }
}

const obj: ReadOnly<Nested> = {
    inner: { prop: 1 }
}

// Cannot assign to 'inner' because it is a read-only property.
obj.inner = 2    
obj.inner.prop = 2
```
- `readonly` 속성은 얕게 동작한다