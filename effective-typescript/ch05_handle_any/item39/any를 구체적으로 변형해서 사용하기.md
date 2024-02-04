# 이펙티브 타입스크립트
## 5장. any 다루기
### 아이템 39. any를 구체적으로 변형해서 사용하기
**any**
- `any` 타입은 자바스크립트에서 표현할 수 있는 모든 값을 아우르는 매우 큰 범위의 타입이다
- `any` 타입에는 모든 숫자, 문자열, 배열, 객체, 정규식, 함수, 클래스, `DOM` 엘리먼트는 물론 `null`과 `undefined`까지도 포함된다
- 일반적인 상황에서는 `any`보다는 더 구체적인 타입을 선언해 타입 안정성을 높여야 한다

**객체 형태 매개변수 타입 선언**
```typescript
function containKeys(obj: {[key: string]: any}, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}
```
- 함수 매개변수가 객체이지만 값을 알 수 없다면 인덱스 시그니처를 사용할 수 있다

```typescript
function containKeys_withObject(obj: object, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}
```
- 혹은 모든 비기본형 (non-primitive) 타입을 포함하는 `object` 타입을 사용할 수 있다
- `null`과 `undefined`도 포함한다

```typescript
// Element implicitly has an 'any' type because expression of type 'string' can't be used to index type '{}'.
// No index signature with a parameter of type 'string' was found on type '{}'.
obj[key]
```
- 그러나 `object` 타입에서 객체 키 열거는 가능하지만 속성 접근은 불가능하다

```typescript
function containKeys_withAllObject(obj: {}, searchKey: string) {
    for (const key in obj) {
        if (key === searchKey) return true
    }
    return false
}

containKeys_withAllObject({ a: 'hi'}, 'hi')
```
- `undefined`와 `null`을 제외한 모든 객체 타입을 사용하고 싶다면 `{}` 타입을 선언할 수 있다

**함수 타입 선언**
```typescript
type Fn0 = () => any
type Fn1 = (arg: any) => any
type FnN = (...arg: any[]) => any
```
- 함수 타입에서도 단순히 `any` 보다는 구체화하는 것이 좋다