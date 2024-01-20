# 이펙티브 타입스크립트
## 1장. 타입스크립트 알아보기
### 아이템 05. any 타입 지양하기

**any 타입**

`any` 타입에는 타입 안정성이 없다.
```typescript
let age: number;
age = '12' as any; // 컴파일 오류가 발생하지 않음!
```
- `any`를 사용하면 타입 체킹의 장점을 누릴 수 없게 된다


`any` 타입은 함수 시그니처를 무시한다.
```typescript
function calculateAge(birthDate: Date): number {
    // ...
}

let birthDate: any = '1990-01-19'
calculateAge(birthDate)
```
- 타입 시스템을 무력화시키므로 최대한 사용을 피해야 한다

