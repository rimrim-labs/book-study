# 이펙티브 타입스크립트
## 5장. any 다루기
### 아이템 42. 모르는 타입의 값에는 any대신 unknown을 사용하기

**unknown**
- 어떤 타입이든 `unknown`에 할당 가능히지만, `unknown`은 `unknown`과 `any`에만 할당 가능하다

```typescript
declare function safeParseYML(yaml: string): unknown

const book = safeParseYML(`
    name: Villete
    author: Charlotte Bronte
`) as Book
```
- `unknown` 타입인 채로 값을 사용하면 오류가 발생하므로, 적절한 타입으로 변환하도록 강제할 수 있다

```typescript
function isBook(val: unknown): val is Book {
    return typeof(val) === 'object' && val != null && 'name' in val && 'author' in val
}

function processValue(val: unknown) {
    if (isBook(val)) {
        val // Book
    }
}
```
- 분기문이나 커스텀 타입가드를 정의해 `unknown`에서 원하는 타입으로 변환할 수 있다

**object, {}**
```typescript
const val: object = {}
const q: object = []
```
- `object` 타입은 모든 비기본형 타입으로 이뤄진다
- 배열과 객체가 이에 해당된다

```typescript
const val: {} = 2
const q: {} = 'str'
```
- `{}` 타입은 `null`과 `undefined`를 제외한 모든 값을 포함한다
- 정말로 `null`이나 `undefined`가 불가능하다고 판단되는 경우에만 `unknown`대신 `{}`를 사용해야 한다


