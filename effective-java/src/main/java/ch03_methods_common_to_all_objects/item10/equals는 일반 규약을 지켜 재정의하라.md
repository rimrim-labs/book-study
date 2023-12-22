 **equals() 메서드 재정의**
 - 객체의 **논리적 동일성**을 확인해야 할 때 재정의한다
 - `Object`에 정의된 `equals()` 메서드를 재정의한다
```java
public class Object {
    public boolean equals(Object obj) {
        return (this == obj);
    }
}
```
- `Object`의 `equals()` 메서드는 **객체 참조가 실제로 동일한 메모리 공간**을 가리키는지 여부를 검사한다 (identity)
  - 객체가 동일한지가 아닌 **값이 같은지를 검사**하고 싶다면 재정의 해야 함

```java
public class TreeMap<K, V> {
  static final boolean valEquals(Object o1, Object o2) {
    return (o1==null ? o2==null : o1.equals(o2));
  }
}
```
- 자바의 컬렉션 프레임워크는 `equals()`가 재정의되었다고 가정하고 동작한다
- `Enum`클래스는 싱글턴 인스턴스를 생성하기 때문에 논리적 동치성과 객체 식별성이 동일한다

**equals() 재정의 규약**
```
null이 아닌 x에 대해, x.equals(x)는 참이어야 한다.
```
- 객체는 자기 자신과 같아야 한다

```
null이 아닌 x,y에 대해, x.equals(y)가 참이면 y.equals(x)도 참이어야 한다.
```
- 두 객체는 서로에 대한 동치 여부를 동일하게 평가해야 한다

```java
null이 아닌 x,y,z에 대해, x.equals(y)가 참이고 y.equals(z)가 참이면 z.equals(x)도 참이어야 한다.
```
- 첫 번째 객체와 두 번째 객체가 같고, 두 번째 객체와 세 번째 객체가 같으면 첫 번째 객체와 세 번째 객체도 같아야 한다

```java
null이 아닌 모든 참조 값 x에 대해, x.equals(null)은 거짓이어야 한다.
```

**equals() 재정의 순서**
1. `==` 연산자로 자기 자신의 참조인지 검사한다
2. `instanceof` 연산자로 입력 타입이 올바른지 확인한다
- `null` 값은 여기서 걸러진다
3. 입력을 올바른 타입으로 형변환한다
- `instanceof`로 검사했기 때문에 안전하다
4. 입력 객체와 자신의 핵심 필드들이 모두 일치하는지 하나씩 검사한다

`equals()` 메서드를 재정의할 땐 반드시 `hashCode()` 메서드도 재정의해야 한다.
