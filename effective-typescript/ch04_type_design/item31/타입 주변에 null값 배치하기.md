# 이펙티브 타입스크립트
## 4장. 타입 설계
### 아이템 31. 타입 주변에 null 값 배치하기
**null 여부**
- 값이 전부 `null`이거나 전부 `null`이 아닌 경우로 명확히 구분하면 다루기 쉬워진다
- 타입 전체에 `null`을 추가하는 방식으로 모델링한다

**undefined 여부**
- `undefined`를 포함하는 객체는 다루기 어렵다
- 어떤 값이 동시에 `undefined`이거나 둘 다 `undefined`가 아닌 경우는 타입으로 표현할 수 없다

**null 타입 선언**
```typescript
function extent(nums: number[]) {
    let min, max
    for (const num of nums) {
        // Argument of type 'number | undefined' is not assignable to parameter of type 'number'
        min = Math.min(min, num)
        // Argument of type 'number | undefined' is not assignable to parameter of type 'number'
        max = Math.max(max, num)
    }
    return [min, max]
}
```
- `nums`가 빈 배열이라면 `min`과 `max`모두 `undefined`가 될 것이다
- 그렇지 않다면 값을 할당받을 것이다

```typescript
function extent(nums: number[]) {
    let result: [number, number] | null = null
    for (const num of nums) {
        // ...
    }
    return result
}
```
- `min`과 `max`를 각각 검사하기 보다는 한 객체로 묶어 `null` 혹은 `null`이 아니게 한다

```typescript
class UserData {
    address: Address
    friends: FriendInfo[]
    
    constructor(address: Address, friends: Friends) {
        this.address = address
        this.friends = friends
    }
    
    static async init(userId: number): Promise<UserData> {
        const [address, friends] = await Promise.all([
            fetchAddress(userId),
            fetchFriends(userId)
        ])
        return new UserData(address, friends)
    }
}
```
- 클래스를 생성할 때도 특정 필드만 값을 갖지 않도록 주의해야 한다
- 클래스를 생성할 때는 모든 값이 준비되었을 때 생성하여 `null` 값이 존재하지 않도록 하는 것이 좋다