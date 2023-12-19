**유틸리티 클래스**
- 정적 메서드와 정적 필드만을 담은 클래스이다
```java
public final class Math {

    private Math() {
    }

    public static final double E = 2.7182818284590452354;
    public static final double PI = 3.14159265358979323846;

    public static double cos(double a) {
        return StrictMath.cos(a);
    }

    @IntrinsicCandidate
    public static double tan(double a) {
        return StrictMath.tan(a);
    }
}
```

**`private` 생성자**
- 생성자를 명시하지 않으면 컴파일러가 자동으로 기본 생성자를 만들어준다
- 따라서 `private` 생성자를 선언해 유틸리티 클래스의 인스턴스화를 막아야 한다
- `private` 생성자를 선언하면 해당 클래스를 상속할 수 없게 된다
  - 하위 클래스에서 상위 클래스 생성자에 접근 불가능해짐
