package ch02_creating_and_destroying_objects.item09;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

@DisplayName("try-finally 테스트")
public class TryFinallySampleTest {

    @Test
    @DisplayName("finally에서 발생한 예외로 try 예외가 가려진다.")
    void try_finally_exception() {
        // when
        final IllegalStateException exception = assertThrows(IllegalStateException.class, this::method);

        // then
        assertThat(exception).hasMessage("second exception");
        assertThat(exception.getCause()).isNull();
    }

    private void method() {
        try {
            throw new IllegalArgumentException("first exception");
        } finally {
            throw new IllegalStateException("second exception");
        }
    }
}
