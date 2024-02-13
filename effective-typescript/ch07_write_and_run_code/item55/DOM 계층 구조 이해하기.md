# 이펙티브 타입스크립트
## 7장. 코드를 작성하고 실행하기
### 아이템 55. DOM 계층 구조 이해하기

**DOM 노드 계층구조**
```
EventTarget
  ㄴ Node
    ㄴ Element / Text / Comment
      ㄴ HTMLElement / SGVElement
        ㄴ HTMLInputElement / HTMLBodyElement / HTMLAnchorElement
```
- 모든 `DOM` 노드는 `EventTarget`을 상속한 `Node`의 하위 클래스이다
- `HTMLEement`는 모든 `HTML` 엘리먼트의 기본이 되는 클래스이다

```typescript
document.getElementsByTagName('p')[0]   // HTMLParagraphElement
document.createElement('button')        // HTMLButtonElement
document.querySelector('div')           // HTMLDivElement
```
- `HTMLxxxElement` 형태의 엘리먼트들은 자신만의 고유한 속성을 갖고 있다
- 엘리먼트 속성에 접근하려면 구체적인 엘리먼트 타입을 가리키고 있어야 한다

```typescript
document.getElementById('content-div') as HTMLDivElement 
```
- 타입스크립트보다 더 정확한 타입을 알고있을 경우 단언문을 사용할 수 있다

**이벤트 계층구조**
```
Event
  ㄴ MouseEvent / KeyboardEvent
```
- `EventTarget` 뿐만 아니라 `Event` 타입에도 계층 구조가 존재한다
