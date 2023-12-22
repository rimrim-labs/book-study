**자원 닫기**
- 자바에는 `close`를 호출해 직접 닫아줘야 하는 자원들이 존재한다
- 자원 닫기는 클라이언트가 놓치기 쉬워 예측할 수 없는 성능 문제로 이어질 수 있다
- 자원을 닫는 전통적인 방식에는 `try-finally`가 있다

**try-finally**
```java
public static void copy(String src, String dst) {
    InputStream in = new FileInputStream(src);
    try {
        // ...
    } finally {
        in.out();
    }
}
```
- `finally` 블록에서 사용이 완료된 자원을 닫아준다
- `try`와 `finally`에서 예외가 모두 발생한다면, `try` 블록 예외는 `finally` 블록에 의해 가려진다
  - 호출 스택에서 지워지기 때문에 디버깅 어려워짐

**try-with-resources**
```java
public static void copy(String src, String dst) throws IOException {
    try (InputStream in = new FileInputStream(src);
        OutputStream out = new FileOutputStream(dst)) {
            byte[] buf = new byte[BUFFER_SIZE];
            int n;
            while ((n = in.read(buf)) >= 0) 
                out.write(buf, 0, n);
        }
}
```
- `AutoCloseable` 인터페이스를 구현한 객체를 `try-with-resources`로 닫을 수 있다
- `try`와 `close` 양쪽에서 예외가 발생하면 `close`에서 발생한 예외가 숨겨지고 `try` 블록의 예외가 기록된다

```java
final Throwable[] suppressed = exception.getSuppressed();
```
- 숨겨진 예외들은 `getSuppressed()` 메서드를 사용해 가져올 수 있다
