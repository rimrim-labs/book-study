# 이펙티브 타입스크립트
## 4장. 타입 설계
### 아이템 33. string 타입보다 더 구체적인 타입 사용하기

**string 타입**
- `string` 타입의 범위는 매우 넓다
- `string` 타입의 변수를 선언하려 한다면 더 좁은 타입이 적절하지 않을지 검토해보라

```typescript
function recordRelease(recordingType: string, date: string) { /* ... */ }

// 호출 순서 뒤바뀜
recordRelease('2024-01-02', 'studio')
```
- `string`을 매개변수로 선언할 경우 호출 순서가 바뀌어도 타입 체크를 통과한다
- `string`도 `any`와 같이 잘못 사용하면 무효한 값을 허용하고 타입 간의 관계도 감춰 버린다

```typescript
function recordRelease(recordingType: 'studio' | 'live', date: Date) { /* .. */ }
```
- 리터럴 유니온을 사용하여 정밀한 타입 체크가 가능하다
- `keyof` 연산자로 객체 속성 체크가 가능하다

**keyof 제네릭**
```typescript
// 반환 타입 - T[keyof T][]
function pick<T>(records: T[], key: keyof T) {
    return records.map(r => r[key])
}
```
- `keyof` 연산자를 사용해 객체의 키 타입을 추출할 수 있다
- 객체의 모든 키 타입이 `key` 인자로 올 수 있기 때문에, 모든 값 타입이 반환 타입에 포함된다

```typescript
// 반환 타입 - T[K][]
function pickWithDetailReturnType<T, K extends keyof T>(records: T[], key: K) {
    return records.map(r => r[key])
}
```
- 반환 타입의 범위를 줄이기 위해 **키의 부분집합**으로 제네릭 변수를 추가하였다
