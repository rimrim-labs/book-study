# 이펙티브 타입스크립트
## 5장. any 다루기
### 아이템 41. any의 진화를 이해하기
**any 타입**
- 타입스크립트에서 변수 타입은 변수를 선언할 때 결정된다
- 타입이 결정된 이후 null 체크 등을 통해 타입 정제는 가능하지만, 새로운 값을 추가해 확장할 수는 없다
- 그러나 `any` 타입과 관련해서는 예외적으로 동작한다

**any 타입 진화**
```typescript
function sum() {
    const nums = [] // any[]

    for (let i = 0; i < 5; i++) {
        nums.push(i) // any[]
    }
    
    return nums // nums[]
}
```
- `nums`를 처음 선언했을 때는 `any[]` 타입이었지만, 반환시에는 `number[]`로 추론된다
- 배열에 다양한 타입의 요소를 넣으면 배열의 타입이 확장되며 진화한다

```typescript
let val // any

if (Math.random() < 0.5) {
    val = /hello/ // any
    val // RegExp
} else {
    val = 5 // any
    val // number
}
```
- 분기문에 의해서도 `any` 타입이 진화한다
- 타입 진화는 값을 할당하거나 배열에 원소를 추가한 후에 일어난다

```typescript
let val = null // any

if (Math.random() < 0.5) {
    val = 2 // any
    val // number
}
```
- 초깃값이 `null`일 때도 `any` 타입이 진화한다

```typescript
let val: any

if (Math.random() < 0.5) {
    val = /hello/ // any
    val // any
}
```
- 타입 진화는 암시적으로 `any` 타입을 할당받았을 때만 동작한다
- 명시적으로 `any`를 선언하면 타입이 계속 유지된다

```typescript
function sum() {
    const nums = []
    
    if (nums.length == 0)
        // Variable 'nums' implicitly has an 'any[]' type
        return nums

    // Variable 'nums' implicitly has an 'any[]' type
    nums[0]
}
```
- 암시적 `any` 타입인 상태에서 변수에 어떤 값도 할당하지 않고 사용하려고 하면 암시적 `any` 오류가 발생한다
- 어떤 변수가 암시적 `any` 타입일 때 값을 읽으려고 하면 오류가 발생한다

```typescript
function arrs() {
    return [1, 2, 3]
}

const nums = []

arrs().forEach(arr => nums.push(arr))

// Variable 'nums' implicitly has an 'any[]' type
nums[0]
```
- 암시적 `any` 타입은 함수 호출을 거쳐도 진화하지 않는다
- 타입 안전성을 지키기 위해 암시적 `any`를 진화시키는 것보다 명시적 타입 구문을 사용하는 것이 좋다
