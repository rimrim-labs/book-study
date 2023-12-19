**싱글턴**
- 유일한 하나의 인스턴스만 생성하는 클래스를 의미한다
- 싱글턴을 생성하면 목(mock) 테스트 하기가 어렵다
  - 싱글턴 클래스의 생성자를 호출 할 수 없음

**싱글턴 생성 방법**
1. 생성자를 `private`으로 감추고 싱글턴 인스턴스를 정적 멤버로 선언한다.
```java
public class SingletonSample01 {

    public static final SingletonSample01 INSTANCE = new SingletonSample01();
    
    private SingletonSample01() {}
}
```
- 유일한 인스턴스 생성을 보장한다
- 그러나 리플렉션을 사용하면 `private` 생성자에도 접근할 수 있다

2. 생성자를 `private`으로 감추고 싱글턴 인스턴스에 접근할 수 있는 정적 메서드를 선언한다.
```java
public class SingletonSample02 {

    private static final SingletonSample02 INSTANCE = new SingletonSample02();
    
    private SingletonSample02() {}
    
    public static SingletonSample02 getInstance() {
        return INSTANCE;
    }
}
```

3. `Enum` 클래스를 선언한다
```java
public enum SingletonSample03 {
    INSTANCE
}
```
- 자바에서 싱글턴임을 보장해준다
- 싱글턴이 `Enum`외의 클래스를 상속해야 할 경우 사용할 수 없다
